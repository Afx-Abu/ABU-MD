function _0x507d(){const _0x113aa5=['20vjdLOE','5085192gTGwMt','6Eoueel','define','841744CKUokN','dataValues','../../config','1402355oKliLp','DATABASE','key','destroy','sequelize','exports','token','trueCaller','741586LVkgTr','number','71170lVsehg','16eLYkSo','1521ZicIqT','created','create','STRING','updated','275YFCPdu','findOne','update','308616LFFJet','findAll','949599FfFomX'];_0x507d=function(){return _0x113aa5;};return _0x507d();}function _0x3d42(_0x54352e,_0x567c6b){const _0x507def=_0x507d();return _0x3d42=function(_0x3d4236,_0x1f0503){_0x3d4236=_0x3d4236-0x189;let _0x11a9ee=_0x507def[_0x3d4236];return _0x11a9ee;},_0x3d42(_0x54352e,_0x567c6b);}const _0x2458ef=_0x3d42;(function(_0x2e6f13,_0xcdbd1b){const _0x2185eb=_0x3d42,_0x153529=_0x2e6f13();while(!![]){try{const _0x27241c=parseInt(_0x2185eb(0x1a3))/0x1+parseInt(_0x2185eb(0x190))/0x2*(parseInt(_0x2185eb(0x1a1))/0x3)+parseInt(_0x2185eb(0x19f))/0x4*(-parseInt(_0x2185eb(0x1a6))/0x5)+parseInt(_0x2185eb(0x1a0))/0x6+parseInt(_0x2185eb(0x19e))/0x7*(parseInt(_0x2185eb(0x193))/0x8)+-parseInt(_0x2185eb(0x194))/0x9*(parseInt(_0x2185eb(0x192))/0xa)+-parseInt(_0x2185eb(0x199))/0xb*(-parseInt(_0x2185eb(0x19c))/0xc);if(_0x27241c===_0xcdbd1b)break;else _0x153529['push'](_0x153529['shift']());}catch(_0x344606){_0x153529['push'](_0x153529['shift']());}}}(_0x507d,0xb4a9e));const config=require(_0x2458ef(0x1a5)),{DataTypes}=require(_0x2458ef(0x18c)),truetDB=config[_0x2458ef(0x189)][_0x2458ef(0x1a2)](_0x2458ef(0x18f),{'key':{'type':DataTypes[_0x2458ef(0x197)],'allowNull':!![]},'token':{'type':DataTypes[_0x2458ef(0x197)],'allowNull':!![]},'number':{'type':DataTypes[_0x2458ef(0x197)],'allowNull':!![]}});async function setTrueCallerkey(_0xe0911f={}){const _0x49ff87=_0x2458ef,_0x248e2d=await truetDB[_0x49ff87(0x19a)]();return!_0x248e2d?(await truetDB[_0x49ff87(0x196)]({'key':_0xe0911f[_0x49ff87(0x18a)],'token':_0xe0911f[_0x49ff87(0x18e)],'number':_0xe0911f[_0x49ff87(0x191)]}),_0x49ff87(0x195)):(await _0x248e2d[_0x49ff87(0x19b)]({'key':_0xe0911f[_0x49ff87(0x18a)],'token':_0xe0911f[_0x49ff87(0x18e)],'number':_0xe0911f['number']}),_0x49ff87(0x198));}async function getTrueCallertoken(){const _0x1090ed=_0x2458ef,_0x114f57=await truetDB[_0x1090ed(0x19a)]();if(_0x114f57)return{'key':_0x114f57[_0x1090ed(0x1a4)][_0x1090ed(0x18a)],'token':_0x114f57['dataValues'][_0x1090ed(0x18e)],'number':_0x114f57[_0x1090ed(0x1a4)][_0x1090ed(0x191)]};else return{'key':![],'token':![],'number':![]};}async function TrueLogout(){const _0x38f37e=_0x2458ef,_0x52bbd0=await truetDB[_0x38f37e(0x19d)]();for(const _0xabc6a2 of _0x52bbd0){_0xabc6a2[_0x38f37e(0x18b)]();}return!![];}module[_0x2458ef(0x18d)]={'setTrueCallerkey':setTrueCallerkey,'getTrueCallertoken':getTrueCallertoken,'TrueLogout':TrueLogout};