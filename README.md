# com.rajesuwerps.sqlExec

[![Appcelerator Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://appcelerator.com/titanium/) [![Appcelerator Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://appcelerator.com/alloy/)

This is a widget for the [Alloy](http://projects.appcelerator.com/alloy/docs/Alloy-bootstrap/index.html) MVC framework of [Appcelerator](http://www.appcelerator.com)'s [Titanium](http://www.appcelerator.com/platform) platform. A widget to quickly inspect the SQLite database in your app, during development, by executing SQL commands. You type in the SQL statement, press 'execute' and the result is shown in the view below. You could use it to set up the database, creating tables, and quickly inspect the data that could save you some time and hassle during development.

## Usage [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/com.rajesuwerps.sqlExec)

* Install [this widget](http://gitt.io/component/com.rajesuwerps.sqlExec) via [gitTio](http://gitt.io):

    `gittio install com.rajesuwerps.sqlExec`
    
* You can use it like this, say in `app/views/index.xml`:

    ```
<Alloy>
    <Window>
        <Widget src="com.rajesuwerps.sqlExec" id="sqlExec" />
    </Window>
</Alloy>
    ```
    
* You can use `<Require>` or `<Widget>`. Example of using <Require> is as follows:


    ```
<Alloy>
    <Window>
        <Require type="widget" src="com.rajesuwerps.sqlExec" id="sqlExec" />
    </Window>
</Alloy>
    ```
    

            
* Call init() from the controller, say `app/controllers/index.js`:

    ```
    $.sqlExec.init({dbName: 'my-database-name'});
    ```

    Replace `'my-database-name'` with name of the SQLite database that you use (or plan to use) in your app.
    
For more on using database in Titanium refer to [Working with a SQLite Database](http://docs.appcelerator.com/titanium/3.0/#!/guide/Working_with_a_SQLite_Database)

## Changelog
- 1.0: Inital version.

## License

<pre>
Copyright 2015 Rajesuwer PS
MIT License. See LICENSE file for details
</pre>

