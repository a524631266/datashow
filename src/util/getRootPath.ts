// baseurl
function getRootPath(): string {
    const hostname = location.hostname;
    const pathname = location.pathname;
    const contextPath = pathname.split("/")[1];
    return contextPath;
    // const port = location.port;
    // const protocol = location.protocol;
    // return protocol + "//" + hostname + ":" + port + "/" + contextPath;
}
const baseurl = getRootPath();

export {
    baseurl,
};
