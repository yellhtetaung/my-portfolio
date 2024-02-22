module.exports = {
    extends: ['gitmoji'],
    rules: {
        'header-max-length': [0, 'always', 100],
        'scope-case': [0, 'always', 'pascal-case'],
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'style', 'package', 'configuration', 'remove', 'revert', 'build', 'pull', 'dependency'],
        ],
    },
};
