const jobname = 'ttdt'
const { timeStamp } = require('console');
const { MD5 } = require('crypto-js');
const $ = Env(jobname)
var sd = require('silly-datetime');
let articlebody = require("../JSON/Youth_common.json");
let currenttime;
let md5str;
let sign;
let uq_idarr = [];
let task_id;
let session_id;
let pl_id
let answerarr = ['A', 'B', 'C', 'D'];
let imei
let theresult
let index
$.message = "";
imeiarr = [
   
    "A0848D02-5C33-4ECD-85FC-F9FE7AD66196"
]
!(async () => {
    await all();
})()
    .catch((e) => {
        $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
    })
    .finally(() => {
        $.done();
    })

async function all() {

    for (let imeiindex = 0; imeiindex &lt; imeiarr.length; imeiindex++) {
        $.log(`\n第${imeiindex + 1}个账号执行任务:`)
        imei = imeiarr[imeiindex];
        currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
        md5str = `imei=${imei}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`
        sign = MD5(md5str).toString().toUpperCase();
        await login();
        
                while(1) {
                    currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
                    md5str = `session_id=${session_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`
                    sign = MD5(md5str).toString().toUpperCase();
                    await getQuestionList()
                    //await $.wait(1000);
                    for (let i = 0; i &lt; uq_idarr.length; i++) {
                        for (let j = 0; j &lt; answerarr.length; j++) {
                            currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
                            md5str = `answer=${answerarr[j]}&amp;session_id=${session_id}&amp;time=${currenttime}&amp;uq_id=${uq_idarr[i]}&amp;key=NcfVw#l5A!gQEO5@`
                            sign = MD5(md5str).toString().toUpperCase();
                            theresult = await getAnsewr(j, i);
                            if (theresult == true) {
                                currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
                                md5str = `pl_id=${pl_id}&amp;session_id=${session_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`
                                sign = MD5(md5str).toString().toUpperCase();
                                await doubleReward();
                            }
                            if (theresult == "100") {
                                break;
                            }
                        }
                        if (theresult == "100") {
                            break;
                        }
                    }
                    if (theresult == "100") {
                        break;
                    }
                }
        
                for (task_id = 1; task_id &lt;= 30; task_id++) {
                    currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
                    md5str = `session_id=${session_id}&amp;task_id=${task_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`
                    sign = MD5(md5str).toString().toUpperCase();
                    theresult = await getTaskAward()
                    if (theresult == true) {
                        currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
                        md5str = `pl_id=${pl_id}&amp;session_id=${session_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`
                        sign = MD5(md5str).toString().toUpperCase();
                        await doubleReward();
                    }
                }
        
        let typearr = [24, 6, 5, 12, 24, 24, 7, 14, 29];
        for (index = 1; index &lt;= 9; index++) {
            type = typearr[index - 1];
            currenttime = parseInt(new Date().getTime() / 1000);//当前时间戳；
            md5str = `is_new=1&amp;session_id=${session_id}&amp;time=${currenttime}&amp;type=${type}&amp;key=NcfVw#l5A!gQEO5@`;
            sign = MD5(md5str).toString().toUpperCase();
            for (let ci = 0; ci &lt; 15; ci++)
                await clickLog();

            currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
            md5str = `index=${index}&amp;session_id=${session_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`
            sign = MD5(md5str).toString().toUpperCase();
            await collectActive();
        }


        currenttime = parseInt(new Date().getTime() / 1000);//当前时间戳；
        md5str = `is_new=1&amp;session_id=${session_id}&amp;time=${currenttime}&amp;type=${type}&amp;key=NcfVw#l5A!gQEO5@`;
        sign = MD5(md5str).toString().toUpperCase();
        await clickLog();


        currenttime = parseInt(new Date().getTime() / 1000);//当前时间戳；
        md5str = `session_id=${session_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`;
        sign = MD5(md5str).toString().toUpperCase();
        await getRedluckyMoney();


        type_idarr = [101, 102, 103, 301]
        for (let ti = 0; ti &lt; type_idarr.length; ti++) {
            type_id = type_idarr[ti];
            currenttime = parseInt(new Date().getTime() / 1000)//当前时间戳；
            md5str = `pay_type=2&amp;session_id=${session_id}&amp;time=${currenttime}&amp;type_id=${type_id}&amp;key=NcfVw#l5A!gQEO5@`
            sign = MD5(md5str).toString().toUpperCase();
            await withdrawThirdApply();
            await $.wait(2000);
        }


        currenttime = parseInt(new Date().getTime() / 1000);//当前时间戳；
        md5str = `session_id=${session_id}&amp;time=${currenttime}&amp;key=NcfVw#l5A!gQEO5@`;
        sign = MD5(md5str).toString().toUpperCase();
        await withdraw();

    }
    $.msg($.message);

}





function getRedluckyMoney() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/index/money/getRedluckyMoney";
        const headers = {
        };
        const body = `session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`昨日奖励:${result.message}`)
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function withdrawThirdApply() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/index/money/withdrawThirdApply";
        const headers = {
        };
        const body = `pay_type=2&amp;session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}&amp;type_id=${type_id}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`提现：提现类型${type_id}，${result.message}`)
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}
















function withdraw() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/index/money/withdraw";
        const headers = {
        };
        const body = `session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.message += `【用户昵称】${result.data.wxNickname}\n【用户余额】${result.data.user_money}\n\n`
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}


function finishAction(action) {
    return new Promise((resolve, reject) =&gt; {
        const url = `http://pic.anngudao.com/index/user/${action}`;
        const headers = {

        };
        const body = `session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`${result.message}`)
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function clickLog() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/index/api/clickLog";
        const headers = {

        };
        const body = `is_new=1&amp;session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}&amp;type=${type}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`${result.message}`)
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}






function collectActive() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/dati/free/collectActive";
        const headers = {

        };
        const body = `index=${index}&amp;session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    $.log(`${result.message}`)
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}










function getAnsewr(aindex, uindex) {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/dati/index/getAnswer";
        const headers = {

        };
        const body = `answer=${answerarr[aindex]}&amp;session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}&amp;uq_id=${uq_idarr[uindex]}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.result == 1 &amp;&amp; result.data.res_code == 1) {
                        $.log(`第${uindex + 1}题回答:正确`)
                        pl_id = result.data.pl_id;
                        resolve(true);

                    }
                    if (result.result == 1 &amp;&amp; result.data.res_code == 0) {
                        $.log(`第${uindex + 1}题回答:错误`)
                        resolve(false);
                    }
                    if (result.result == 0 &amp;&amp; result.message.indexOf("明天继续加油") != -1) {
                        $.log(`${result.message}`)
                        resolve("100");
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}




function getQuestionList() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/dati/index/getQuestionList";
        const headers = {

        };
        const body = `session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {

                    result = JSON.parse(data);
                    let temp = "";
                    uq_idarr = [];
                    for (let i = 0; i &lt; result.data.question_list.length; i++) {
                        uq_idarr.push(result.data.question_list[i].uq_id);
                        temp += result.data.question_list[i].uq_id;
                        temp += " ";
                    }
                    $.log(`获取uq_id成功，uq_id=${temp}`)

                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}



function getTaskAward() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/dati/task/getTaskAward";
        const headers = {

        };
        const body = `session_id=${session_id}&amp;sign=${sign}&amp;task_id=${task_id}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {

                    result = JSON.parse(data);
                    if (result.message.indexOf("操作成功") != -1) {
                        $.log(`${result.message}`)
                        pl_id = result.data.pl_id;
                        resolve(true)
                    }
                    else {
                        $.log(`${result.message}`)
                        resolve(false)

                    }
                }
            } catch (e) {
                $.log(e)
            }

        })
    })
}



function login() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/index/user/login";
        const headers = {
            "App-Refer": "2"
        };
        const body = `imei=${imei}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    //$.log(data);
                    result = JSON.parse(data)
                    if (result.result == 1) {
                        session_id = result.data.session_id
                        $.log(`获取session_id成功，session_id:${session_id}`);
                        resolve(true);
                    }
                    else {
                        $.log("登录失败");
                        resolve(false);
                    }

                }
            } catch (e) {
                $.log(e)
            }

        })
    })
}



function doubleReward() {
    return new Promise((resolve, reject) =&gt; {
        const url = "http://pic.anngudao.com/index/user/doubleReward";
        const headers = {
        };
        const body = `pl_id=${pl_id}&amp;session_id=${session_id}&amp;sign=${sign}&amp;time=${currenttime}`;
        const request = {
            url: url,
            headers: headers,
            body: body
        };

        $.post(request, async (error, response, data) =&gt; {
            try {
                if (error) {
                    $.log('请求失败');
                }
                else {
                    result = JSON.parse(data);
                    if (result.result == 1) {
                        $.log(`${result.message}`)
                    }
                }
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}








function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
                : t;
            let s = this.get;
            return "POST" === e &amp;&amp; (s = this.post),
                new Promise((e, i) =&gt; {
                    s.call(this, t, (t, s, r) =&gt; {
                        t ? i(t) : e(s)
                    })
                })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
                this.http = new s(this),
                this.data = null,
                this.dataFile = "box.dat",
                this.logs = [],
                this.isMute = !1,
                this.isNeedRewrite = !1,
                this.logSeparator = "\n",
                this.startTime = (new Date).getTime(),
                Object.assign(this, e),
                this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module &amp;&amp; !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient &amp;&amp; "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch { }
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e =&gt; {
                this.get({
                    url: t
                }, (t, s, i) =&gt; e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s =&gt; {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                    r = e &amp;&amp; e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"),
                    a = {
                        url: `http://${h}/v1/scripting/evaluate`,
                        body: {
                            script_text: t,
                            mock_type: "cron",
                            timeout: r
                        },
                        headers: {
                            "X-Key": o,
                            Accept: "*/*"
                        }
                    };
                this.post(a, (t, e, i) =&gt; s(i))
            }).catch(t =&gt; this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s &amp;&amp; this.fs.existsSync(e);
                if (!s &amp;&amp; !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                    this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s &amp;&amp; this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) =&gt; Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) &gt;&gt; 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                    r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                    o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                        s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                        s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data &amp;&amp; this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data &amp;&amp; this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
                this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
                this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
                t &amp;&amp; (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie &amp;&amp; void 0 === t.cookieJar &amp;&amp; (t.cookieJar = this.ckjar))
        }
        get(t, e = (() =&gt; { })) {
            t.headers &amp;&amp; (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
                this.isSurge() || this.isLoon() ? (this.isSurge() &amp;&amp; this.isNeedRewrite &amp;&amp; (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.get(t, (t, s, i) =&gt; {
                    !t &amp;&amp; s &amp;&amp; (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite &amp;&amp; (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t =&gt; {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t =&gt; e(t))) : this.isNode() &amp;&amp; (this.initGotEnv(t), this.got(t).on("redirect", (t, e) =&gt; {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                                e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t =&gt; {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t =&gt; {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i &amp;&amp; i.body)
                }))
        }
        post(t, e = (() =&gt; { })) {
            if (t.body &amp;&amp; t.headers &amp;&amp; !t.headers["Content-Type"] &amp;&amp; (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers &amp;&amp; delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() &amp;&amp; this.isNeedRewrite &amp;&amp; (t.headers = t.headers || {}, Object.assign(t.headers, {
                    "X-Surge-Skip-Scripting": !1
                })), $httpClient.post(t, (t, s, i) =&gt; {
                    !t &amp;&amp; s &amp;&amp; (s.body = i, s.statusCode = s.status),
                        e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite &amp;&amp; (t.opts = t.opts || {}, Object.assign(t.opts, {
                    hints: !1
                })), $task.fetch(t).then(t =&gt; {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t =&gt; e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t =&gt; {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t =&gt; {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i &amp;&amp; i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) &amp;&amp; (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) &amp;&amp; (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t =&gt; {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                        : this.isSurge() ? {
                            url: t
                        }
                            : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() &amp;&amp; $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
                s &amp;&amp; h.push(s),
                i &amp;&amp; h.push(i),
                console.log(h.join("\n")),
                this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length &gt; 0 &amp;&amp; (this.logs = [...this.logs, ...t]),
                console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() &amp;&amp; !this.isQuanX() &amp;&amp; !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e =&gt; setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
                this.log(),
                (this.isSurge() || this.isQuanX() || this.isLoon()) &amp;&amp; $done(t)
        }
    }
        (t, e)
}
