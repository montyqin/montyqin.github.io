var SCOREBOARD_FEED = "http://smb.cdnak.neulion.com/fs/fox/btn2go/data/scoreboard/scoreboard.js";
var scoreboardInterval = 60;

var MIN_DATE = new Date(2011,1,1);
var MAX_DATE = null;

var SCHOOLS = {
	"bigten": {
		"id": "b1g",
		"color": "#003a63"
	},
	"illinois": {
		"id": "ill",
		"color": "#14284b"
	},
	"indiana": {
		"id": "ind",
		"color": "#a30d1d"
	},
	"iowa": {
		"id": "iowa",
		"color": "#1e1e1e"
	},
	"maryland": {
		"id": "mary",
		"color": "#e31937"
	},
	"michigan": {
		"id": "mich",
		"color": "#00275e"
	},
	"michigan-state": {
		"id": "msu",
		"color": "#1c463c"
	},
	"minnesota": {
		"id": "min",
		"color": "#98061b"
	},
	"nebraska": {
		"id": "neb",
		"color": "#d80100"
	},
	"northwestern": {
		"id": "nw",
		"color": "#393a96"
	},
	"ohio-state": {
		"id": "osu",
		"color": "#c00436"
	},
	"penn-state": {
		"id": "psu",
		"color": "#071843"
	},
	"purdue": {
		"id": "pur",
		"color": "#1e1e1e"
	},
	"rutgers": {
		"id": "rut",
		"color": "#1e1e1e"
	},
	"wisconsin": {
		"id": "wis",
		"color": "#d40026"
	}
};

var FREEWHEEL_PRODUCTION = false;
if(FREEWHEEL_PRODUCTION)
{
	var profilePath = "fox_live";
	window._fw_linktag_params = {
		scan_delay : 0,
		server : "1c6e2.v.fwmrm.net",
		network_id : "116450", // Live
		profile : "FDM_Neulion_Live",
		other_global_params : "csid=qa.fe.fxnetworks.dws.la",
		key_values :  "_fw_fss=_fw_search"
	};
}else
{
	var profilePath = "fox_test";
	window._fw_linktag_params = {
		scan_delay : 0,
		server : "1c6e2.v.fwmrm.net",
		network_id : "116457", // Test
		profile : "FDM_Neulion_Test",
		other_global_params : "csid=qa.fe.fxnetworks.dws.la",
		key_values :  "_fw_fss=_fw_search"
	};
}
