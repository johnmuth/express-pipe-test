1. Add the following to your /etc/hosts:

```
127.0.0.1	app-one.externaldomain.com
127.0.0.1	app-two.externaldomain.com
127.0.0.1   app-two.internaldomain.com
```

2. Start up app1:

```
$ cd expressapp1
$ npm install
$ node app.js
```

3. Open a separate terminal window and start up app2:

```
$ cd expressapp2
$ node app.js
```

4. In a browser, go to http://app-one.externaldomain.com:3000/

