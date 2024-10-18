# awesome-vscode-syntax-hilighter
syntax hilighter for awesome enterprise in VS Code editor


command to compile
initialize a Node.js project
npm init -y

Install the necessary dependencies:
npm install @types/vscode --save-dev

Now you can package your extension by running:
vsce package


After successfully packaging your extension, you can install it in VS Code by:

Opening VS Code
Going to the Extensions view (Ctrl+Shift+X)
Clicking on the ... at the top of the Extensions view
Choosing "Install from VSIX..."
Selecting your newly created .vsix file

Remember, every time you make changes to your extension, you'll need to repackage it and reinstall it to see the changes in VS Code.