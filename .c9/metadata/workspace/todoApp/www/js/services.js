{"filter":false,"title":"services.js","tooltip":"/todoApp/www/js/services.js","undoManager":{"mark":5,"position":5,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["angular.module('todoApp.services',[]).factory('Todo',['$http',function($http){","\treturn {","","   }","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":4,"column":4},"action":"remove","lines":["angular.module('todoApp.services',[]).factory('Todo',['$http',function($http){","\treturn {","","   }","}]);"]},{"start":{"row":0,"column":0},"end":{"row":46,"column":4},"action":"insert","lines":["angular.module('todoApp.services',[]).factory('Todo',['$http','PARSE_CREDENTIALS',function($http,PARSE_CREDENTIALS){","    return {","        getAll:function(){","            return $http.get('https://api.parse.com/1/classes/Todo',{","                headers:{","                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,","                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,","                }","            });","        },","        get:function(id){","            return $http.get('https://api.parse.com/1/classes/Todo/'+id,{","                headers:{","                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,","                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,","                }","            });","        },","        create:function(data){","            return $http.post('https://api.parse.com/1/classes/Todo',data,{","                headers:{","                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,","                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,","                    'Content-Type':'application/json'","                }","            });","        },","        edit:function(id,data){","            return $http.put('https://api.parse.com/1/classes/Todo/'+id,data,{","                headers:{","                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,","                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,","                    'Content-Type':'application/json'","                }","            });","        },","        delete:function(id){","            return $http.delete('https://api.parse.com/1/classes/Todo/'+id,{","                headers:{","                    'X-Parse-Application-Id': PARSE_CREDENTIALS.APP_ID,","                    'X-Parse-REST-API-Key':PARSE_CREDENTIALS.REST_API_KEY,","                    'Content-Type':'application/json'","                }","            });","        }","    }","}]);"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":3},"end":{"row":49,"column":3},"action":"insert","lines":[".value('PARSE_CREDENTIALS',{","    APP_ID: 'xhTpJiNedJ7mmDj3LTTBUePqSVegcJHzEbh70Y0Q',","    REST_API_KEY:'XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY'","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":13},"end":{"row":47,"column":53},"action":"remove","lines":["xhTpJiNedJ7mmDj3LTTBUePqSVegcJHzEbh70Y0Q"]},{"start":{"row":47,"column":13},"end":{"row":47,"column":53},"action":"insert","lines":["BJuqNP20et5ZepVamIfhBsdqhpR0XfpbsUAkx6It"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":18},"end":{"row":48,"column":58},"action":"remove","lines":["XCfQDPODgNB1HqmaCQgKLPWGxQ0lCUxqffzzURJY"]},{"start":{"row":48,"column":18},"end":{"row":48,"column":58},"action":"insert","lines":["UUmLVeWr4g4OgCogpAXDmuGa1aH4Ejk3eUWM3nAs"]}]}],[{"group":"doc","deltas":[{"start":{"row":0,"column":34},"end":{"row":0,"column":35},"action":"insert","lines":[" "]},{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"insert","lines":[" "]},{"start":{"row":0,"column":64},"end":{"row":0,"column":65},"action":"insert","lines":[" "]},{"start":{"row":0,"column":85},"end":{"row":0,"column":86},"action":"insert","lines":[" "]},{"start":{"row":0,"column":101},"end":{"row":0,"column":102},"action":"insert","lines":[" "]},{"start":{"row":0,"column":120},"end":{"row":0,"column":121},"action":"insert","lines":[" "]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":[" "]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":[" "]},{"start":{"row":3,"column":68},"end":{"row":3,"column":69},"action":"insert","lines":[" "]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":[" "]},{"start":{"row":6,"column":43},"end":{"row":6,"column":44},"action":"insert","lines":[" "]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":[" "]},{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":[" "]},{"start":{"row":11,"column":68},"end":{"row":11,"column":69},"action":"insert","lines":[" "]},{"start":{"row":11,"column":70},"end":{"row":11,"column":71},"action":"insert","lines":[" "]},{"start":{"row":11,"column":74},"end":{"row":11,"column":75},"action":"insert","lines":[" "]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":[" "]},{"start":{"row":14,"column":43},"end":{"row":14,"column":44},"action":"insert","lines":[" "]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":[" "]},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":[" "]},{"start":{"row":19,"column":69},"end":{"row":19,"column":70},"action":"insert","lines":[" "]},{"start":{"row":19,"column":75},"end":{"row":19,"column":76},"action":"insert","lines":[" "]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":[" "]},{"start":{"row":22,"column":43},"end":{"row":22,"column":44},"action":"insert","lines":[" "]},{"start":{"row":23,"column":35},"end":{"row":23,"column":36},"action":"insert","lines":[" "]},{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":[" "]},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":[" "]},{"start":{"row":27,"column":32},"end":{"row":27,"column":33},"action":"insert","lines":[" "]},{"start":{"row":28,"column":68},"end":{"row":28,"column":69},"action":"insert","lines":[" "]},{"start":{"row":28,"column":70},"end":{"row":28,"column":71},"action":"insert","lines":[" "]},{"start":{"row":28,"column":74},"end":{"row":28,"column":75},"action":"insert","lines":[" "]},{"start":{"row":28,"column":80},"end":{"row":28,"column":81},"action":"insert","lines":[" "]},{"start":{"row":29,"column":24},"end":{"row":29,"column":25},"action":"insert","lines":[" "]},{"start":{"row":31,"column":43},"end":{"row":31,"column":44},"action":"insert","lines":[" "]},{"start":{"row":32,"column":35},"end":{"row":32,"column":36},"action":"insert","lines":[" "]},{"start":{"row":36,"column":15},"end":{"row":36,"column":16},"action":"insert","lines":[" "]},{"start":{"row":36,"column":28},"end":{"row":36,"column":29},"action":"insert","lines":[" "]},{"start":{"row":37,"column":71},"end":{"row":37,"column":72},"action":"insert","lines":[" "]},{"start":{"row":37,"column":73},"end":{"row":37,"column":74},"action":"insert","lines":[" "]},{"start":{"row":37,"column":77},"end":{"row":37,"column":78},"action":"insert","lines":[" "]},{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":[" "]},{"start":{"row":40,"column":43},"end":{"row":40,"column":44},"action":"insert","lines":[" "]},{"start":{"row":41,"column":35},"end":{"row":41,"column":36},"action":"insert","lines":[" "]},{"start":{"row":46,"column":30},"end":{"row":46,"column":31},"action":"insert","lines":[" "]},{"start":{"row":48,"column":17},"end":{"row":48,"column":18},"action":"insert","lines":[" "]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":24},"end":{"row":0,"column":32},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1427114515000,"hash":"987d0244dab741faea769a25df02c8781ed5896f"}