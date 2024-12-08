export const languageMappingsWithText: {[key: string]: string} = {
    c: "printf(\"🌠 {selectedSnippet}: %d\", {selectedSnippet});",
    cpp: "cout << \"🌠 {selectedSnippet}: \" << {selectedSnippet};",
    go: "fmt.Printf(\"🌠 {selectedSnippet}: \", {selectedSnippet})",
    java: "System.out.println(\"🌠 {selectedSnippet}: \" + {selectedSnippet});",
    javascript: "console.log('🌠 {selectedSnippet}: ', {selectedSnippet});",
    javascriptreact: "console.log('🌠 {selectedSnippet}: ', {selectedSnippet});",
    php: "echo '<pre>';\necho '🌠 ${selectedSnippet}: ';\nvar_dump(${selectedSnippet});\ndie;",
    ruby: "puts \"🌠 {selectedSnippet}: #\{{selectedSnippet}.pretty_inspect\}\"",
    python: "print('🌠 {selectedSnippet}: ' + str({selectedSnippet}))",
    typescript: "console.log('🌠 {selectedSnippet}: ', {selectedSnippet});",
    typescriptreact: "console.log('🌠 {selectedSnippet}: ', {selectedSnippet});",
    vue: "console.log('🌠 {selectedSnippet}: ', {selectedSnippet});",
};

export const languageMappingsBase: {[key: string]: string} = {
    c: "printf();",
    cpp: "cout << \"\";",
    go: "fmt.Printf()",
    java: "System.out.println();",
    javascript: "console.log();",
    javascriptreact: "console.log();",
    php: "echo '<pre>';\nvar_dump();\ndie;",
    python: "print()",
    ruby: "puts",
    typescript: "console.log();",
    typescriptreact: "console.log();",
    vue: "console.log();",
};