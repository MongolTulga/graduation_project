﻿! function(a) {
	"function" == typeof define ? define("xvDate", [], function(b, c, d) {
		var e = {};
		a(e), d.exports = e.xvDate
	}) : a(window)
}(function(a) {
	var b = {};
	a.xvDate = function(a) {
		var c = a.triggerId || a.targetId;
		if ("object" == typeof c && c.length)
			for (var d = [], e = 0; e < c.length; e++) d.push(b.getId(c[e])), b.enable(d[e], d, a);
		else d = b.getId(c), b.enable(d, d, a)
	}, b.fn = b.prototype = {
		init: function(a) {
			this.creatView(a), this.initTimes(!1)
		},
		gb: {},
		creatView: function(a) {
			var c, d = a || {},
				e = this,
				f = d.targetId || "dates",
				g = b.getId(f);
			if (e.gb.algin = d.alignId ? b.getId(d.alignId) : g, e.gb.format = d.format || "-", e.gb.hms = "off" !== d.hms || null, e.gb.zIndex = d.zIndex || 9999, e.gb.trigger = d.trigger, e.limitTime(d.min, "minTime"), e.limitTime(d.max, "maxTime"), e.gb.datesBox) e.gb.target === g || e.ishd(e.gb.datesBox) ? e.shde(e.gb.datesBox) : (b.removeEvent(document, "click", e.docArea), e.shde(e.gb.datesBox, 2)), e.gb.target = g, e.setPosition(e.gb.algin, e.gb.datesBox, {
				left: 0,
				top: 0
			}), e.setPosition(e.gb.algin, e.gb.datesBox), c = {
				that: e
			}, b.removeEvent(document, "click", e.docArea), b.addEvent(document, "click", e.docArea, c), e.gb.datesBox.style.zIndex = e.gb.zIndex;
			else {
				var h = e.gb.datesBox = e.creatEle("div");
				e.gb.datesBox.id = "xv_Dates_box", e.gb.target = g, e.gb.datesBox.className = "dates_box", e.gb.datesBox.style.display = "block", e.gb.datesBox.style.zIndex = e.gb.zIndex, e.append(e.gb.datesBox), h.innerHTML = "<div class='dates_box_top'><div class='dates_yy dates_choose'><span class='prev_choose choose_btn' id='xv_Yy_prev'><i class='sign'></i></span><span class='ipt_wrap' id='xv_Year_wrap'><input class='dlt_status' style='width:32px;margin-left:4px;' id='xv_Ipt_year' type='text'><small>年</small><i class='sign'></i></span><span class='next_choose choose_btn' id='xv_Yy_next'><i class='sign'></i></span><div class='dates_yy_list' id='xv_Dates_yy_list' style='display:none'>" + function() {
					for (var a = "", b = 1970; b < 2100; b++) a += "<span dateValue = " + b + ">" + b + "</span>";
					return a
				}() + "</div></div><div class='dates_mm dates_choose'><span class='prev_choose choose_btn' id='xv_Mm_prev'><i class='sign'></i></span><span class='ipt_wrap' id='xv_Moth_wrap'><input class='dlt_status' style='width:16px;margin-left:10px;' id='xv_Ipt_month' type='text'><small>月</small><i class='sign'></i></span><span class='next_choose choose_btn' id='xv_Mm_next'><i class='sign'></i></span><div class='dates_mm_list' id='xv_Dates_mm_list' style='display:none'>" + function() {
					for (var a = "", b = 1; b < 13; b++) a += b < 10 ? "<span dateValue =" + b + ">0" + b + "月</span>" : "<span dateValue =" + b + ">" + b + "月</span>";
					return a
				}() + "</div></div></div>" + this.viewTb() + "<div class='dates_bottom'><ul id='dates_hms' class='dates_hms' style='display:block' ><li class='time_tag'>时间</li><li><input type='text' id='xv_Hours' class='dlt_status'><span>:</span></li><li><input type='text' id='xv_Minutes' class='dlt_status'><span>:</span></li><li><input type='text' id='xv_Seconds' class='dlt_status'><span>&nbsp;</span></li></ul><div class='dates_btn'><a id='xv_Dates_clear'>清空</a><a id='xv_Dates_today'>今天</a><a id='xv_Dates_ok'>确认</a></div></div>", e.handleTime(), e.gb.datesHms = b.getId("dates_hms"), e.setPosition(e.gb.algin, e.gb.datesBox, {
					left: 0,
					top: 0
				}), e.setPosition(e.gb.algin, e.gb.datesBox), c = {
					that: e
				}, b.addEvent(document, "click", e.docArea, c)
			}
			var i = this.gb.datesHms;
			i ? this.shde(i, 2) : this.shde(i, 1);
			var j = d.triggerId || d.targetId;
			if ("object" == typeof j && j.length) {
				e.gb.trigger = [];
				for (var k = 0; k < j.length; k++) e.gb.trigger.push(b.getId(j[k]))
			} else e.gb.trigger = b.getId(j)
		},
		docArea: function(a) {
			var b = a.srcElement || a.target,
				c = a.datas.that;
			!c.ishd(c.gb.datesBox) && !c.contain(c.gb.datesBox, b) && b !== c.gb.target && !c.isExistObj(c.gb.trigger, b) && c.shde(c.gb.datesBox, 1)
		},
		limitTime: function(a, b) {
			var c = this.checkTime(a);
			this.gb[b] = c ? this.datesSplit(c) : null
		},
		datesSplit: function(a) {
			return a ? (datesTimeArr = a.split(" "), datesArr = datesTimeArr[0].split(/[-\/]/), timesArr = this.gb.hms && datesTimeArr[1] ? datesTimeArr[1].split(":") : null, {
				year: datesArr[0],
				month: datesArr[1],
				date: datesArr[2],
				hours: timesArr ? timesArr[0] : 0,
				minutes: timesArr ? timesArr[1] : 0,
				seconds: timesArr ? timesArr[2] : 0
			}) : a
		},
		handleTime: function() {
			var a = this;
			a.gb.td = b.getId("dates_table")
				.getElementsByTagName("td");
			for (var c = a.gb.els = {
				yearWrap: b.getId("xv_Year_wrap"),
				monthWrap: b.getId("xv_Moth_wrap"),
				yyList: b.getId("xv_Dates_yy_list"),
				mmList: b.getId("xv_Dates_mm_list"),
				yyConList: b.getId("xv_Dates_yy_list")
					.getElementsByTagName("span"),
				mmConList: b.getId("xv_Dates_mm_list")
					.getElementsByTagName("span"),
				yyPrev: b.getId("xv_Yy_prev"),
				yyNext: b.getId("xv_Yy_next"),
				mmPrev: b.getId("xv_Mm_prev"),
				mmNext: b.getId("xv_Mm_next"),
				datesClear: b.getId("xv_Dates_clear"),
				datesToday: b.getId("xv_Dates_today"),
				datesOk: b.getId("xv_Dates_ok"),
				iptYear: b.getId("xv_Ipt_year"),
				iptMonth: b.getId("xv_Ipt_month"),
				iptHours: b.getId("xv_Hours"),
				iptMinutes: b.getId("xv_Minutes"),
				iptSeconds: b.getId("xv_Seconds")
			}, d = [c.iptYear, c.iptMonth, c.iptHours, c.iptMinutes, c.iptSeconds], e = 0; e < d.length; e++) b.addEvent(d[e], "click", a.focusStatus);
			b.addEvent(c.iptYear, "blur", function() {
				var b = "^((19[0-9]{2})|(2[0-9]{3}))$",
					c = this,
					d = a.checkFocus(b, c, a.gb.time.year);
				d && (a.gb.time.year = d, a.insertDate())
			}), b.addEvent(c.iptMonth, "blur", function() {
				var b = "^((0[1-9])|(1[0-2])|[1-9])$",
					c = this,
					d = a.checkFocus(b, c, a.formatTime(a.gb.time.month));
				d && (a.gb.time.month = d, a.insertDate())
			}), b.addEvent(c.iptHours, "blur", function() {
				var b = this;
				a.gb.time.hours = a.checkFocus("^(([0-1][0-9])|(2[0-3])|[0-9])$", b, "00")
			}), b.addEvent(c.iptMinutes, "blur", function() {
				var b = this;
				a.gb.time.minutes = a.checkFocus("^(([0-5][0-9])|[0-9])$", b, "00")
			}), b.addEvent(c.iptSeconds, "blur", function() {
				var b = this;
				a.gb.time.seconds = a.checkFocus("^(([0-5][0-9])|[0-9])$", b, "00")
			}), b.addEvent(c.datesClear, "click", function() {
				a.gb.target.value = ""
			}), b.addEvent(c.datesOk, "click", function() {
				var b = a.gb.hms ? "hms" : "ymd",
					c = a.gb.time;
				a.compareTime(c.year, c.month, c.date, b) && a.getOkTime()
			}), b.addEvent(c.datesToday, "click", function() {
				a.initTimes(!0)
			}), b.addEvent(c.yearWrap, "click", a.yearLst, {
				els: c,
				that: a
			}), b.addEvent(a.gb.datesBox, "click", a.ymLst, {
				els: c,
				that: a
			}), a.ymClick(c.yyConList, c.yyList, "year"), a.ymClick(c.mmConList, c.mmList, "month"), b.addEvent(c.monthWrap, "click", function() {
				"none" === c.mmList.style.display ? document.activeElement !== c.iptMonth && (c.mmList.style.display = "block") : c.mmList.style.display = "none"
			});
			var f = {
				mmPrev: [-1, "month"],
				mmNext: [1, "month"],
				yyPrev: [-1, "year"],
				yyNext: [1, "year"]
			};
			for (e in f) b.addEvent(c[e], "click", a.datesBtn, {
				that: a,
				direction: f[e][0],
				type: f[e][1]
			});
			for (e = 0; e < a.gb.td.length; e++) b.addEvent(a.gb.td[e], "click", a.getDate, {
				that: a
			})
		},
		getDate: function(a) {
			var b, c = this.innerHTML,
				d = a.datas.that,
				e = parseInt(this.getAttribute("m"), 10);
			b = 1 === d.gb.time.month && 12 === e ? d.gb.time.year - 1 : 12 === d.gb.time.month && 1 === e ? d.gb.time.year + 1 : d.gb.time.year, d.compareTime(b, e, c) && (d.gb.time.year = b, d.gb.time.month = e, d.gb.time.date = c, d.insertDate(), d.getOkTime())
		},
		yearLst: function(a) {
			var b = a.datas.els,
				c = a.datas.that;
			if ("none" === b.yyList.style.display) {
				if (document.activeElement !== b.iptYear) {
					b.yyList.style.display = "block";
					for (var d = 0; d < b.yyConList.length; d++)
						if (b.yyConList[d].getAttribute("dateValue") === c.gb.time.year) {
							var e = b.yyConList[d].offsetTop;
							e > 170 && (b.yyList.scrollTop = e)
						}
				}
			} else b.yyList.style.display = "none"
		},
		ymLst: function(a) {
			var b = a.srcElement || a.target,
				c = a.datas.els,
				d = a.datas.that;
			d.contain(c.yearWrap, b) || d.ishd(c.yyList) || (c.yyList.style.display = "none"), d.contain(c.monthWrap, b) || d.ishd(c.mmList) || (c.mmList.style.display = "none")
		},
		focusStatus: function() {
			this.focus && (this.select(), this.className = "")
		},
		combineTime: function(a, b) {
			var c;
			if (!a) return !1;
			var d = a.year.toString(),
				e = this.formatTime(a.month.toString()),
				f = this.formatTime(a.date.toString()),
				g = this.formatTime(a.hours.toString()),
				h = this.formatTime(a.minutes.toString()),
				i = this.formatTime(a.seconds.toString());
			switch (b) {
				case "hms":
					c = d + e + f + g + h + i;
					break;
				case "ymd":
					c = d + e + f;
					break;
				case "ym":
					c = d + e;
					break;
				case "y":
					c = d;
					break;
				default:
					c = d + e + f
			}
			return parseInt(c, 10)
		},
		compareTime: function(a, b, c, d) {
			var e = this,
				f = e.gb.time,
				g = e.combineTime({
					year: a,
					month: b,
					date: c,
					hours: f.hours,
					minutes: f.seconds,
					seconds: f.minutes
				}, d),
				h = e.combineTime(e.gb.minTime, d) || "",
				i = e.combineTime(e.gb.maxTime, d) || "";
			return h && !i ? !(g < h) || null : !h && i ? !(g > i) || null : !h || !i || (!(g > i || g < h) || null)
		},
		initTimes: function(a) {
			var b, c, d, e, f, g, h, i, j = this.gb.target,
				k = this.checkTime(j.value);
			k && (k = this.datesSplit(k)), a ? (i = new Date, b = i.getDate(), c = i.getFullYear(), d = i.getMonth() + 1, e = i.getHours(), f = i.getMinutes(), g = i.getSeconds()) : !a && k ? (b = k.date, c = k.year, d = k.month, e = k.hours, f = k.minutes, g = k.seconds) : a || this.gb.minTime || this.gb.maxTime || k ? k || !this.gb.minTime && !this.gb.maxTime || (h = this.gb.minTime || this.gb.maxTime, b = h.date, c = h.year, d = h.month, e = h.hours, f = h.minutes, g = h.seconds) : (i = new Date, b = i.getDate(), c = i.getFullYear(), d = i.getMonth() + 1, e = 0, f = 0, g = 0), this.gb.time = {
				year: c,
				month: d,
				date: b,
				hours: e,
				minutes: f,
				seconds: g
			}, this.insertDate()
		},
		viewTb: function() {
			var a = ["日", "一", "二", "三", "四", "五", "六"],
				b = [],
				c = 0,
				d = this.creatEle("table"),
				e = this.creatEle("thead"),
				f = this.creatEle("tbody");
			d.className = "dates_table", d.id = "dates_table";
			for (var g = 1; g < 8; g++) {
				var h = this.creatEle("th");
				this.append(h, e), h.innerHTML = a[g - 1]
			}
			for (g = 1; g < 7; g++) {
				b[g] = this.creatEle("tr"), this.append(b[g], f);
				for (var i = 1; i < 8; i++) {
					var j = this.creatEle("td");
					j.setAttribute("index", c++), this.append(j, b[g])
				}
			}
			return this.append(e, d), this.append(f, d), d.outerHTML
		},
		insertDate: function() {
			var a, b, c = this.gb.els,
				d = this.gb.time,
				e = c.yyConList,
				f = c.mmConList,
				g = c.iptYear,
				h = c.iptMonth,
				i = c.iptHours,
				j = c.iptMinutes,
				k = c.iptSeconds,
				l = d.year,
				m = parseInt(d.month, 10),
				n = d.date,
				o = d.hours,
				p = d.minutes,
				q = d.seconds,
				r = this.gb.td,
				s = new Date;
			s.setFullYear(l, m - 1), s.setDate(1);
			var t = s.getDay(),
				u = this.getDays(l, m - 1);
			this.dateStatus(f, m, "current"), this.dateStatus(e, l, "current");
			for (var v = 0; v < u; v++) r[t + v].innerHTML = v + 1, r[t + v].className = "", v + 1 === n ? r[t + v].className = "current_day" : n > u && (r[t + u - 1].className = "current_day", this.gb.time.date = u), r[t + v].setAttribute("m", m), r[t + v].setAttribute("y", l);
			for (v = 0; v < t; v++) r[t - v - 1].className = "other_day", r[t - v - 1].innerHTML = this.getDays(l, m - 2) - v, m - 1 > 0 ? (a = m - 1, b = l) : (a = 12, b = l - 1), r[t - v - 1].setAttribute("m", a), r[t - v - 1].setAttribute("y", b);
			for (v = 0; v < r.length - t - u; v++) r[t + u + v].className = "other_day", r[t + u + v].innerHTML = v + 1, m + 1 > 12 ? (a = 1, b = l + 1) : (a = m + 1, b = l), r[t + u + v].setAttribute("m", a), r[t + u + v].setAttribute("y", b);
			var w = this.combineTime(this.gb.minTime) || "",
				x = this.combineTime(this.gb.maxTime) || "",
				y = {
					year: l,
					month: m,
					date: n,
					hours: this.gb.time.hours,
					minutes: this.gb.time.minutes,
					seconds: q
				};
			if (w) {
				for (v = 0; v < r.length; v++) y.year = r[v].getAttribute("y"), y.date = r[v].innerHTML, y.month = r[v].getAttribute("m"), this.combineTime(y) < w && (r[v].className = "disable_day");
				for (v = 0; v < e.length; v++) e[v].getAttribute("dateValue") < this.gb.minTime.year && (e[v].className = "disable_day");
				for (v = 0; v < f.length; v++) d.year + this.formatTime(f[v].getAttribute("dateValue")) < this.combineTime(this.gb.minTime, "ym") && (f[v].className = "disable_day")
			}
			if (x) {
				for (v = 0; v < r.length; v++) y.year = r[v].getAttribute("y"), y.date = r[v].innerHTML, y.month = r[v].getAttribute("m"), this.combineTime(y) > x && (r[v].className = "disable_day");
				for (v = 0; v < e.length; v++) e[v].getAttribute("dateValue") > this.gb.maxTime.year && (e[v].className = "disable_day");
				for (v = 0; v < f.length; v++) d.year + this.formatTime(f[v].getAttribute("dateValue")) > this.combineTime(this.gb.maxTime, "ym") && (f[v].className = "disable_day")
			}
			g.value = l, h.value = this.formatTime(m), i.value = this.formatTime(o), j.value = this.formatTime(p), k.value = this.formatTime(q)
		},
		ymClick: function(a, b, c) {
			function d() {
				"month" === c ? (f = this.getAttribute("dateValue"), e = h.gb.time.year, g = h.gb.time.date) : "year" === c && (e = this.getAttribute("dateValue"), f = h.gb.time.month, g = h.gb.time.date), h.compareTime(e, f, g) && (h.gb.time.year = e, h.gb.time.month = f, h.gb.time.date = g, h.removeStatus(a), this.className = "current", b.style.display = "none", h.insertDate())
			}
			for (var e, f, g, h = this, i = 0; i < a.length; i++) a[i].onclick = d
		},
		ishd: function(a) {
			return "none" === a.style.display || null
		},
		shde: function(a, b) {
			b ? 1 === b ? a.style.display = "none" : 2 === b && (a.style.display = "block") : a.style.display = "block" === a.style.display ? "none" : "block"
		},
		isExistObj: function(a, b) {
			if ("object" == typeof a && a.length) {
				for (var c = 0; c < a.length; c++)
					if (a[c] === b) return !0
			} else if (a === b) return !0;
			return !1
		},
		checkFocus: function(a, b, c, d) {
			b.className = "dlt_status";
			var e = b.value;
			return new RegExp(a)
				.test(e) ? (this.gb.time[d] = this.formatTime(e), b.value = this.gb.time[d]) : b.value = c, b.value
		},
		datesBtn: function(a) {
			var b = a.datas.that,
				c = b.gb.time.year,
				d = b.gb.time.month,
				e = parseInt(c, 10),
				f = parseInt(d, 10),
				g = b.gb.time.date,
				h = a.datas.type,
				i = a.datas.direction;
			if ("month" === h) {
				1 === f && i < 0 ? (d = 12, c = e + i) : 12 === f && i > 0 ? (d = 1, c = e + 1) : d = f + i;
				var j = b.getDays(c, d - 1);
				g > j && (g = j)
			} else "year" === h && (c = e + i);
			b.gb.time.year = c, b.gb.time.month = d, b.gb.time.date = g, b.insertDate()
		},
		removeStatus: function(a) {
			for (var b = 0; b < a.length; b++) a[b].className = ""
		},
		dateStatus: function(a, b, c) {
			for (var d = 0; d < a.length; d++) a[d].className = "", a[d].getAttribute("dateValue") === b && (a[d].className = c)
		},
		getOkTime: function() {
			var a, b, c = {},
				d = this.gb.format;
			for (var e in this.gb.time) c[e] = this.formatTime(this.gb.time[e]);
			b = " " + c.hours + ":" + c.minutes + ":" + c.seconds, a = this.gb.hms ? b : "", this.gb.target.value = c.year + d + c.month + d + c.date + a, this.shde(this.gb.datesBox)
		},
		checkTime: function(a) {
			var b = "[-/]",
				c = this.gb.hms ? "(\\s){1}((0?[0-9])|(1[0-9])|(2[0-3])):([0-5][0-9]):([0-5][0-9])" : "",
				d = a ? a.replace(/^(\s*)|(\s*)$/g, "")
					.replace(/(\s)+/g, " ") : "";
			return !!new RegExp("^((19[0-9]{2})|(2[0-9]{3}))" + b + "((0?[1-9])|(1[0-2]))" + b + "((0?[1-9])|(1[0-9])|(2[0-9])|(3[0-1]))" + c + "$")
				.test(d) && d
		},
		formatTime: function(a) {
			return /^(\d){1}$/.test(a) ? "0" + a : a
		},
		getDays: function(a, b) {
			var c;
			return b < 0 ? (b = 11, a -= 1) : b > 11 && (b = 0, a += 1), b + 1 === 2 && (c = a % 4 == 0 && a % 100 != 0 || a % 400 == 0 ? 29 : 28), [31, c, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
		},
		creatEle: function(a, b) {
			return (b || document)
				.createElement(a)
		},
		append: function(a, b) {
			return (b || document.body)
				.appendChild(a)
		},
		setPosition: function(a, b, c) {
			if (c && "object" == typeof c) return b.style.left = 0, b.style.top = 0, !1;
			var d = this.getOffset(a),
				e = d.left,
				f = d.top,
				g = b.offsetHeight,
				h = a.offsetHeight,
				i = this.resetSizeAttr("scrollTop"),
				j = this.resetSizeAttr("offsetHeight"),
				k = f - i;
			b.style.top = j - k > g ? f + h - 1 + "px" : f - g + 1 + "px", b.style.left = e + "px"
		},
		resetSizeAttr: function(a, b) {
			return (b || document.body)[a] || document.documentElement && document.documentElement[a]
		},
		getOffset: function(a, b) {
			var c = b || {
				left: 0,
				top: 0
			};
			return a && (c.left += a.offsetLeft, c.top += a.offsetTop, a.offsetParent && (a = a.offsetParent, arguments.callee(a, c))), c
		},
		contain: function(a, b) {
			return document.all ? a.contains(b) : 20 === a.compareDocumentPosition(b) || a === b || null
		}
	}, b.enable = function(c, d, e) {
		b.addEvent(c, "click", function() {
			a.xvDate.Dates ? a.xvDate.Dates.init(e, d) : a.xvDate.Dates = new b.fn.init(e, d)
		})
	}, b.getId = function(a, b) {
		return (b || document)
			.getElementById(a)
	}, b.addEvent = function(a, b, c, d) {
		a["evt" + b + c] = a["evt" + b + c] || null, a["evt" + b + c] || (a["evt" + b + c] = function(b) {
			b = b || window.event, b.datas = d || {}, c.call(a, b)
		}), a.addEventListener ? a.addEventListener(b, a["evt" + b + c], !1) : a.attachEvent && a.attachEvent("on" + b, a["evt" + b + c])
	}, b.removeEvent = function(a, b, c) {
		void 0 !== a.removeEventListener ? a.removeEventListener(b, a["evt" + b + c], !1) : void 0 !== a.detachEvent && c && a["evt" + b + c] && a.detachEvent("on" + b, a["evt" + b + c])
	}, b.fn.init.prototype = b.fn
});