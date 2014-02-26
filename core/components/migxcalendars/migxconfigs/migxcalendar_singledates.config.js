{
  "id":161,
  "name":"migxcalendar_singledates",
  "formtabs":[
    {
      "MIGX_id":1,
      "caption":"[[%migxcal.event]]",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"title",
          "caption":"[[%migxcal.title]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"startdate",
          "caption":"[[%migxcal.start]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":3,
          "field":"enddate",
          "caption":"[[%migxcal.end]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"date",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":4,
          "field":"allday",
          "caption":"[[%migxcal.allday]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"[[%migxcal.inherited]]==0||[[%migxcal.yes]]==1||[[%migxcal.no]]==2",
          "default":""
        }
      ]
    }
  ],
  "contextmenus":"update||remove",
  "actionbuttons":"addItem",
  "columnbuttons":"",
  "filters":"[]",
  "extended":{
    "migx_add":"Add Date",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"migxcalendar_singledates",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "extrahandlers":"this.publishObject||this.unpublishObject",
    "packageName":"migxcalendars",
    "classname":"migxCalendarDates",
    "task":"",
    "getlistsort":"startdate",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"Event",
    "has_jointable":"no",
    "getlistwhere":{
      "type":"single"
    },
    "joins":"",
    "cmpmaincaption":"Events Manager",
    "cmptabcaption":"Events",
    "cmptabdescription":"Manage Events",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":true,
      "show_in_grid":"0",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":3,
      "header":"Start",
      "dataIndex":"startdate",
      "width":20,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"this.renderDate",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":5,
      "header":"Ende",
      "dataIndex":"enddate",
      "width":20,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"this.renderDate",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":6,
      "header":"Aktiv",
      "dataIndex":"published",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderClickCrossTick",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    }
  ],
  "createdby":1,
  "createdon":"2014-02-24 08:24:31",
  "editedby":1,
  "editedon":"2014-02-26 07:05:41",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-02-24 01:00:00",
  "publishedby":0
}