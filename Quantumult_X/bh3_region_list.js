/*
「崩坏3」跨服（iOS客户端 → 官服服务器）
By: Mornwind
Reference: 霞ヶ丘詩羽x / FlintyLemming

README:
https://github.com/Mornwind/BH3_Region_Selector/blob/master/README.md
*/

let list = JSON.parse($response.body);

list = {
    "region_list": [
        {
            "dispatch_url": "http://106.14.51.73/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_state": "Recommend", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "android01", 
            "retcode": 0, 
            "title": "安卓国服"
        }, 
        {
            "dispatch_url": "http://139.224.7.27/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "ios01", 
            "retcode": 0, 
            "title": "ios"
        }, 
        {
            "dispatch_url": "http://106.15.162.73/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "pc01", 
            "retcode": 0, 
            "title": "pc01"
        }, 
        {
            "dispatch_url": "http://139.196.248.220/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "bb01", 
            "retcode": 2, 
            "title": "BiliBili服"
        }, 
        {
            "dispatch_url": "http://115.159.20.29/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "yyb01", 
            "retcode": 2, 
            "title": "应用宝服"
        }, 
        {
            "dispatch_url": "http://139.196.248.218/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "hun01", 
            "retcode": 2, 
            "title": "混服01"
        }, 
        {
            "dispatch_url": "http://139.196.248.219/query_gameserver", 
            "ext": {
                "data_use_asset_boundle": "1", 
                "res_use_asset_boundle": "1", 
                "server_stop_jump_name": "前往米游社", 
                "server_stop_jump_to_url": "https://m.bbs.mihayo.com/bh3ToBBS.html", 
                "update_streaming_asb": "1"
            }, 
            "name": "hun02", 
            "retcode": 2, 
            "title": "混服02"
        }
    ], 
    "retcode": 0
}

$done({body: JSON.stringify(list)});