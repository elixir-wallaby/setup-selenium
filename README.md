# setup-selenium

This action sets up Selenium, FireFox, and GeckoDriver for use in actions

# Usage

See [action.yml](action.yml)

``` yaml
steps:
- uses: actions/checkout@master
- uses: elixir-wallaby/setup-selenium@master
- run: |
    selenium-server
 ```


