# test-samesite-cookie

Just for confirming behavior of Cookie SameSite attribute

## steps

### setup

```
cd server1
npm i
npm run watch
# other window
cd server2
npm i
npm run watch
```

### rewriting `/etc/hosts`

```
127.0.0.1 one.test.com
127.0.0.1 two.test.com
```

### access

- `http://one.test.com:8000`
- `http://two.test.com:8001`
