define(['babel', 'babel-plugin-module-resolver','module'], function(babel, moduleResolver,_module) {
    var fetchText, _buildMap = {};
    if (typeof window !== 'undefined' && window.navigator && window.document) {
        fetchText = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function (evt) {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            };
            xhr.send(null);
        };
    } else if (typeof process !== 'undefined' &&
               process.versions &&
               !!process.versions.node) {
        //Using special require.nodeRequire, something added by r.js.
        var fs = require.nodeRequire('fs');
        fetchText = function (path, callback) {
            callback(fs.readFileSync(path, 'utf8'));
        };
    }

    babel.registerPlugin('module-resolver', moduleResolver);

    function resolvePath (sourcePath) {
        if (sourcePath.indexOf('!') < 0) {
            return 'es6!' + sourcePath;
        }
    }
    var excludedOptions = ['extraPlugins', 'resolveModuleSource'];
    var pluginOptions = _module.config();
    var fileExtension = pluginOptions.fileExtension || '.js';
    var defaultOptions = {
        plugins: (pluginOptions.extraPlugins || []).concat([
            'transform-modules-amd',
            [
                'module-resolver',
                {
                    resolvePath: pluginOptions.resolveModuleSource || resolvePath
                }
            ]
        ])
    };
    for (var key in pluginOptions) {
        if (pluginOptions.hasOwnProperty(key) && excludedOptions.indexOf(key) < 0) {
            defaultOptions[key] = pluginOptions[key];
        }
    }

    return {
        load: function (name, req, onload, config) {
            if(window[name]){//load from window object
                onload((_buildMap[name] = window[name]));
                return;
            }

            var sourceFileName = name + fileExtension;
            var url = req.toUrl(sourceFileName);

            if (url.indexOf('empty:') === 0) {
                return onload();
            }

            var options = {};
            for (var key in defaultOptions) {
                options[key] = defaultOptions[key];
            }
            options.sourceFileName = sourceFileName;
            options.sourceMap = config.isBuild ? false : 'inline';

            fetchText(url, function (text) {
                var code;
                try {
                    code = babel.transform(text, options).code;
                } catch (error) {
                    return onload.error(error);
                }

                if (config.isBuild) {
                    _buildMap[name] = code;
                }

                onload.fromText(code);
            });
        },
        write: function (pluginName, moduleName, write) {
            if (moduleName in _buildMap) {
                write.asModule(pluginName + '!' + moduleName, _buildMap[moduleName]);
            }
        }
    };
});
