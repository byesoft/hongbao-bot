/**
 * [判断是否含有红包链接]
 */
function isIncludeUrl(content) {
    if (/https:\/\/h5.ele.me\/hongbao/i.test(content) || /https:\/\/activity.waimai.meituan.com/i.test(content) || /http:\/\/url.cn/i.test(content))
    {
        return true
    }
    return false
}

/**
 * [获取红包链接]
 */
function getUrl(content) {
    // 饿了吗链接
    if (/https:\/\/h5.ele.me\/hongbao/i.test(content)) {
        const first = content.search(/https:\/\/h5.ele.me\/hongbao/i);
        const last = content.search(/device_id=/i) + 10;
        const url = content.slice(first, last).replace(/amp;/g,"")

        return url
    }

    // 美团
    if (/https:\/\/activity.waimai.meituan.com/i.test(content)) {
        const first = content.search(/https:\/\/activity.waimai.meituan.com/i);
        const last = content.search(/urlKey=/i) + 39
        const url = content.slice(first, last)

        return url
    }

    //短网址
    if (/http:\/\/url.cn/i.test(content)) {
        const first = content.search(/http:\/\/url.cn/i);
        const last = first + 21;
        const url = content.slice(first, last)

        return url
    }
}

function isMeituan(content) {
    // 美团
    if (/https:\/\/activity.waimai.meituan.com/i.test(content)) {
        return true
    }

    return false
}

/**
 * [检验用户是否发过红包]
 */
function isSendUrl(userInfos, name) {
    if (!userInfos.length) {
        return false
    }

    for (let i = 0; i < userInfos.length; i++) {
        if (userInfos[i].name === name) {
            return true
        }
    }
    return false
}

/**
 * 获取用户自己发的红包
 */
function getUserOwnInfo(userInfos, name) {
    for (let i = 0; i < userInfos.length; i++) {
        if (userInfos[i].name === name) {
            return userInfos[i]
        }
    }
}

module.exports = {
  isIncludeUrl,
  getUrl,
  getUserOwnInfo,
  isSendUrl,
  isMeituan
}
