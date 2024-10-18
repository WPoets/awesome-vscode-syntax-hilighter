const vscode = require('vscode');

function activate(context) {
    const provider = vscode.languages.registerCompletionItemProvider('awesomeenterprise', {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (!linePrefix.endsWith('[')) {
                return undefined;
            }

            const shortcodes = [
                'env.set', 'env.get', 'env.set_array', 'env.dump', 'env.echo',
                'template.set', 'template.get', 'template.set_array', 'template.dump', 'template.echo',
                'if.equal', 'if.not_equal', 'if.else',
                'loop.@i', 'do.@setup',
                'str.create', 'int.create', 'num.create', 'bool.create',
                'mysqli.fetch.rows', 'mysqli.fetch.row', 'mysqli.cud',
                'request2.get', 'request2.dump', 'request2.echo'
            ];

            return shortcodes.map(shortcode => {
                const item = new vscode.CompletionItem(shortcode, vscode.CompletionItemKind.Function);
                item.insertText = new vscode.SnippetString(`${shortcode} $1 /]`);
                return item;
            });
        }
    }, '[');

    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
