# Nodecopter

A Command line utility for nodecopter

## Install

    npm install -g nodecopter

## Usage

    $ nodecopter --help

## Commands

    $ nodecopter config
    $ nodecopter demo
    $ nodecopter land
    $ nodecopter repl
    $ nodecopter reset
    $ nodecopter status
    $ nodecopter telnet
    $ nodecopter trim

## Config files

You can store config for passing to the `nodecopter` command in a nodecopter.json file.

When the `nodecopter` command is ran it looks in the following places for config:

* commandline arguments
* a nodecopter.json in the current directory
* a nodecopter.json in your home directory
* or falls back to default.json in the module

An example of nodecopter.json:

    {
      "ip": "192.168.1.2"
    }

## Development

Source hosted at [GitHub](http://github.com/andrew/nodecopter).
Report Issues/Feature requests on [GitHub Issues](http://github.com/andrew/nodecopter).

### Note on Patches/Pull Requests

 * Fork the project.
 * Make your feature addition or bug fix.
 * Add tests for it. This is important so I don't break it in a future version unintentionally.
 * Send me a pull request. Bonus points for topic branches.

## Copyright

Copyright (c) 2013 Andrew Nesbitt. See [LICENSE](https://github.com/andrew/nodecopter/blob/master/LICENSE) for details.
