module.exports = [
"[project]/apps/frontend/messages/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/apps_frontend_messages_en_json_6b391e08._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/apps/frontend/messages/en.json (json)");
    });
});
}),
"[project]/apps/frontend/messages/pt-br.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/apps_frontend_messages_pt-br_json_f96a5a50._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/apps/frontend/messages/pt-br.json (json)");
    });
});
}),
];