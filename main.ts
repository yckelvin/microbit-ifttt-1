let temperature = 0
microIoT.microIoT_initDisplay()
microIoT.microIoT_WIFI("DGINCB_WT6F", "20210601")
microIoT.microIoT_MQTT(
"vkW338gnR",
"DkZq38gnRz",
"DanDCZznR",
microIoT.SERVERS.English
)
basic.forever(function () {
    microIoT.microIoT_http_IFTTT("alert", "bWRj55XwiMaWDKZsBPM67s")
    if (temperature > 26) {
        microIoT.microIoT_http_post(
        "temperature is too high, please be cautious",
        "",
        "",
        2000
        )
    }
})
basic.forever(function () {
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    dht11_dht22.selectTempType(tempType.celsius)
    temperature = dht11_dht22.readData(dataType.temperature)
    microIoT.microIoT_showUserText(2, convertToText(temperature))
    basic.pause(2000)
})
