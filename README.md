# NextJS + IP2LOCATION Project Example

Next.js + IP2Location project example  with Tor traffic blocking demonstration. Visit [SitePoint](https:///sitepoint.com/) for tutorial.

## Prerequisites

- Node v10 and later
- Yarn

## Local Setup

Clone project into your workspace

```bash
$ git clone ...
$ cd next-ip2location-example

# Setup environment file
$ touch .env
```

Visit [ip2location]() and sign up for the following trial keys:

- [IP2Location Trial Key](https://www.ip2location.com/web-service/ip2location)
- [IP2Proxy Trial Key](https://www.ip2location.com/web-service/ip2proxy)

The `demo` key will only give 20 credits per day. Signing up for IP2Location Trial Key will give you 5,000 free credits while the IP2Proxy Trial Key will give ou 1,000 free credits. The keys will be sent to your email. Once you have obtained the keys, replace `demo` with your actual keys accordingly.

```env
NEXT_SERVER_TEST_IP=<any public ip address>
NEXT_SERVER_IP2LOCATION_API=demo
NEXT_SERVER_IP2PROXY_API=demo
```

Once you have created the above `.env` file, the app is ready to be launched.

```bash
# Install dependencies
$ yarn

# Launch App
$ yarn dev
```

Open your browser and navigate to `localhost:3000`.

## Deploy

You'll need to [download now](https://zeit.co/download) on your machine. Once it's installed, deploying the app is as simple as executing the following commands at the root of the project:

```bash
# Upload API keys
$ now secrets add NEXT_SERVER_IP2LOCATION_API <secret-value>
$ now secrets add NEXT_SERVER_IP2PROXY_API <secret-value>

# Deploy the app
$ now --prod
```

## License

The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
