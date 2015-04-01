
var dbName;

function log(msg, obj) {
  if (obj) {
    Ti.API.info(msg + ": " + JSON.stringify(obj) + "\n");
  } else {
    Ti.API.info((msg || "") + "\n");
  }
}

function execSql() {
  var sql = $.sql.value;
  var outputStr;
  var rs;

  log("sql", sql);

  $.status.text = "";
  $.output.value = "";
  if (sql) {
    var conn = Ti.Database.open(dbName);
    try {
      rs = conn.execute(sql);
      $.status.text = rs ? "  Rows: " + rs.getRowCount() : "  Rows Affected: " + conn.getRowsAffected();
    } catch (e) {
      $.status.text = "Error";
      $.output.value = "Error:\n" + JSON.stringify(e);
      rs && rs.close();
      conn && conn.close();
      return;
    }
    outputStr = "";
    log("field count", rs.getFieldCount());
    log("row count", rs.getRowCount());
    while (rs && rs.isValidRow()) {
      var fieldValues = [];
      _.times(rs.getFieldCount(), function(n) {
        var val = rs.field(n);
        log("[" + n + "] f val", val);
        fieldValues.push(val);
      });
      outputStr = outputStr + (fieldValues.join(" | ")) + "\n";
      log();
      rs.next();
    }
    rs && rs.close();
    conn && conn.close();
  } else {
    outputStr = "Empty sql";
    
  }
  log("outputstr", outputStr);
  $.output.value = outputStr ? outputStr : "n/a";
}

$.init = function(args){
  args = args || {};
  dbName = args.dbName;  
  if(dbName){
    $.output.value = "Database set to '" + dbName + "'. Enter your SQL above";
  }else{
    $.output.value = "No database available. Pass in as 'dbName' in arguments to the init()";
  }
};
