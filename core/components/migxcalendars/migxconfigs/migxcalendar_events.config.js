{
  "id":158,
  "name":"migxcalendar_events",
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
          "caption":"[[%migxcal.start_firstdate]]",
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
          "caption":"[[%migxcal.end_firstdate]]",
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
          "MIGX_id":6,
          "field":"allday",
          "caption":"[[%migxcal.allday]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"[[%migxcal.yes]]==1",
          "default":""
        },
        {
          "MIGX_id":4,
          "field":"categoryid",
          "caption":"[[%migxcal.category]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"@EVAL return 'Select Category!==||' . $modx->runSnippet('migxLoopCollection',array('packageName'=>'migxcalendars','classname'=>'migxCalendarCategories','sortConfig'=>'[{\"sortby\":\"name\"}]','tpl'=>'@CODE:[[+name]]==[[+id]]','outputSeparator'=>'||'));",
          "default":""
        },
        {
          "MIGX_id":5,
          "field":"categories",
          "caption":"[[%migxcal.assigned_categories]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox-multiple",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"@EVAL return $modx->runSnippet('migxLoopCollection',array('packageName'=>'migxcalendars','classname'=>'migxCalendarCategories','sortConfig'=>'[{\"sortby\":\"name\"}]','tpl'=>'@CODE:[[+name]]==[[+id]]','outputSeparator'=>'||'));",
          "default":""
        },
        {
          "MIGX_id":7,
          "field":"object_id",
          "caption":"",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"hidden",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    },
    {
      "MIGX_id":2,
      "caption":"[[%migxcal.repeatings]]",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"repeating",
          "caption":"[[%migxcal.repeat_weekly]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"[[%migxcal.yes]]==1",
          "default":"0"
        },
        {
          "MIGX_id":2,
          "field":"repeattype",
          "caption":"",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"hidden",
          "validation":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"T\u00e4glich==0||W\u00f6chentlich==1||Monatlich==2||J\u00e4hrlich==3",
          "default":1
        },
        {
          "MIGX_id":3,
          "field":"repeatenddate",
          "caption":"[[%migxcal.lastdate]]",
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
          "field":"children",
          "caption":"[[%migxcal.repeatings]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"migxdb",
          "validation":"",
          "configs":"migxcalendar_repeatings",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    },
    {
      "MIGX_id":3,
      "caption":"[[%migxcal.singledates]]",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"singleevents",
          "caption":"[[%migxcal.singledates]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"migxdb",
          "validation":"",
          "configs":"migxcalendar_singledates",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"checkavailability",
          "caption":"[[%migxcal.singledates]]",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"migxdb",
          "validation":"",
          "configs":"migxcalendar_checkavailability",
          "display":"none",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        }
      ]
    }
  ],
  "contextmenus":"recall_remove_delete",
  "actionbuttons":"addItem||toggletrash||emptyThrash",
  "columnbuttons":"updateevent",
  "filters":[
    {
      "MIGX_id":5,
      "name":"resetall",
      "label":"resetall",
      "emptytext":"",
      "type":"resetall",
      "getlistwhere":"",
      "getcomboprocessor":"",
      "combotextfield":"",
      "comboidfield":"",
      "comboparent":"",
      "default":""
    },
    {
      "MIGX_id":2,
      "name":"search",
      "label":"search",
      "emptytext":"migx.search",
      "type":"textbox",
      "getlistwhere":{
        "Event.id":"[[+search]]",
        "OR:Event.title:LIKE":"%[[+search]]%"
      },
      "getcomboprocessor":"",
      "combotextfield":"",
      "comboidfield":"",
      "comboparent":"",
      "default":"_empty"
    },
    {
      "MIGX_id":3,
      "name":"date",
      "label":"date",
      "emptytext":"",
      "type":"date",
      "getlistwhere":"[[preparedatewhere? &name=`date`]]",
      "getcomboprocessor":"",
      "combotextfield":"",
      "comboidfield":"",
      "comboparent":"",
      "default":"all"
    },
    {
      "MIGX_id":1,
      "name":"category",
      "label":"category",
      "emptytext":"migxcal.category_filter",
      "type":"combobox",
      "getlistwhere":{
        "Category.id":"[[+category]]"
      },
      "getcomboprocessor":"getcombo",
      "combotextfield":"Category.name",
      "comboidfield":"categoryid",
      "comboparent":"",
      "default":"all"
    },
    {
      "MIGX_id":4,
      "name":"active",
      "label":"active",
      "emptytext":"",
      "type":"combobox",
      "getlistwhere":{
        "published":"[[+active]]"
      },
      "getcomboprocessor":"getactivecombo",
      "combotextfield":"",
      "comboidfield":"",
      "comboparent":"",
      "default":"all"
    }
  ],
  "extended":{
    "migx_add":"[[%migxcal.add_event]]",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"migxcalendar_events",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "actionbuttonsperrow":2,
    "winbuttonslist":"cancel||done||check_availability",
    "extrahandlers":"this.handleColumnSwitch||this.publishObject||this.unpublishObject||this.handleEventColumnSwitch",
    "filtersperrow":3,
    "packageName":"migxcalendars",
    "classname":"migxCalendarDates",
    "task":"events",
    "getlistsort":"startdate",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":[
      {
        "alias":"Event",
        "selectfields":"id,title,deleted,published",
        "type":"right"
      },
      {
        "alias":"Category",
        "classname":"migxCalendarCategories",
        "on":"Category.id=Event.categoryid"
      }
    ],
    "cmpmaincaption":"[[%migxcal.events_cmp_main_caption]]",
    "cmptabcaption":"[[%migxcal.events]]",
    "cmptabdescription":"[[%migxcal.events_cmp_desc]]",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":7,
      "header":"[[%migxcal.event]] ID",
      "dataIndex":"Event_id",
      "width":10,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":true,
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":2,
      "header":"[[%migxcal.title]]",
      "dataIndex":"Event_title",
      "width":30,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":3,
      "header":"[[%migxcal.start]]",
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
      "header":"[[%migxcal.end]]",
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
      "MIGX_id":4,
      "header":"",
      "dataIndex":"deleted",
      "width":"",
      "sortable":"false",
      "show_in_grid":"0",
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":8,
      "header":"[[%migxcal.event_active]]",
      "dataIndex":"Event_published",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderSwitchStatusOptions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":[
        {
          "MIGX_id":1,
          "name":"published",
          "value":"0",
          "clickaction":"switchOption",
          "handler":"this.handleEventColumnSwitch",
          "image":"assets\/components\/migx\/style\/images\/cross.png"
        },
        {
          "MIGX_id":2,
          "name":"published",
          "value":1,
          "clickaction":"switchOption",
          "handler":"this.handleEventColumnSwitch",
          "image":"assets\/components\/migx\/style\/images\/tick.png"
        }
      ]
    },
    {
      "MIGX_id":6,
      "header":"[[%migxcal.active]]",
      "dataIndex":"published",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderSwitchStatusOptions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":[
        {
          "MIGX_id":1,
          "name":"published",
          "value":"0",
          "clickaction":"switchOption",
          "handler":"",
          "image":"assets\/components\/migx\/style\/images\/cross.png"
        },
        {
          "MIGX_id":2,
          "name":"published",
          "value":1,
          "clickaction":"switchOption",
          "handler":"",
          "image":"assets\/components\/migx\/style\/images\/tick.png"
        }
      ]
    }
  ],
  "createdby":1,
  "createdon":"2014-02-15 21:18:42",
  "editedby":1,
  "editedon":"2014-03-09 19:10:17",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-02-15 01:00:00",
  "publishedby":0
}