/**
 * 嵌套页面IFrame模块
 */

import { baseUrl } from "@/utils/global";

/**
 * 嵌套页面URL地址
 * @param {*} url
 */
export function getIFramePath(url) {
  let iframeUrl = "";
  if (/^iframe:.*/.test(url)) {
    iframeUrl = url.replace("iframe:", "");
  } else if (/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url.replace("http://", "");
    iframeUrl = iframeUrl.replace("https://", "");

    if (iframeUrl.indexOf(":") != -1) {
      iframeUrl = iframeUrl.substring(iframeUrl.lastIndexOf(":") + 1);
    }

    // if (
    //   iframeUrl.startsWith("127.0.0.1") ||
    //   iframeUrl.startsWith("localhost")) {
    // } else {
    //   iframeUrl = "http://" + iframeUrl;
    // }
  }
  console.log("getIFramePath:" + iframeUrl);
  return iframeUrl;
}

/**
 * 嵌套页面路由路径
 * @param {*} url
 */
export function getIFrameUrl(url) {
  let iframeUrl = "";
  if (/^iframe:.*/.test(url)) {
    iframeUrl = baseUrl + url.replace("iframe:", "");
  } else if (/^http[s]?:\/\/.*/.test(url)) {
    iframeUrl = url;
  }
  return iframeUrl;
}
