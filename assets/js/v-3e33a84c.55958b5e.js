"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[67606],{9304:(e,t,o)=>{o.r(t),o.d(t,{data:()=>i});const i={key:"v-3e33a84c",path:"/devices/ZNJLBL01LM.html",title:"Xiaomi ZNJLBL01LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi ZNJLBL01LM control via MQTT",description:"Integrate your Xiaomi ZNJLBL01LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Fully open and fully closed positions",slug:"fully-open-and-fully-closed-positions",children:[]},{level:3,title:"Change button directions",slug:"change-button-directions",children:[]},{level:3,title:"Adapter firmware",slug:"adapter-firmware",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Cover",slug:"cover",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Charging_status (binary)",slug:"charging-status-binary",children:[]},{level:3,title:"Motor_state (enum)",slug:"motor-state-enum",children:[]},{level:3,title:"Running (binary)",slug:"running-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZNJLBL01LM.md",git:{updatedTime:1666800734e3}}},81479:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var i=o(66252);const a=(0,i.uE)('<h1 id="xiaomi-znjlbl01lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-znjlbl01lm" aria-hidden="true">#</a> Xiaomi ZNJLBL01LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZNJLBL01LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara roller shade companion E1</td></tr><tr><td>Exposes</td><td>cover (state, position), battery, device_temperature, charging_status, motor_state, running, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZNJLBL01LM.jpg" alt="Xiaomi ZNJLBL01LM"></td></tr><tr><td>White-label</td><td>Xiaomi RSD-M01</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Hold the reset button, on the bottom of the device, for 5 seconds.</p><p><em>Pairing the device with a new bridge will <strong>not</strong> reset the fully open/closed position.</em></p><h3 id="fully-open-and-fully-closed-positions" tabindex="-1"><a class="header-anchor" href="#fully-open-and-fully-closed-positions" aria-hidden="true">#</a> Fully open and fully closed positions</h3><p>The rotation range (fully open and fully closed) can be reset by holding the both the up and down buttons for 3 seconds until the light turns blue.</p><h4 id="fully-open-position" tabindex="-1"><a class="header-anchor" href="#fully-open-position" aria-hidden="true">#</a> Fully open position</h4><p>The fully open position can be set by setting the shade to the desired position and then pressing the up button 5 times in succession. If successful the light turns blue and flashes 3 times.</p><h4 id="fully-closed-position" tabindex="-1"><a class="header-anchor" href="#fully-closed-position" aria-hidden="true">#</a> Fully closed position</h4><p>The fully closed position can be set by setting the shade to the desired position and then pressing the down button 5 times in succession. If successful the light turns blue and flashes 3 times.</p><h3 id="change-button-directions" tabindex="-1"><a class="header-anchor" href="#change-button-directions" aria-hidden="true">#</a> Change button directions</h3><p>If the up and down buttons are working in the oppsite direction of how your blinds opreate, they can be swapped by pressing the reset button 3 times. If successful the light turns solid blue for 1 second.</p><h3 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h3><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',16),r=(0,i.Uk)("CC2530/CC2531: "),n={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},d=(0,i._)("code",null,"20211115",-1),s=(0,i.Uk)("CC1352/CC2652: "),l={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},c=(0,i._)("code",null,"20211114",-1),u=(0,i.Uk)("CC2538: "),h={href:"https://github.com/jethome-ru/zigbee-firmware/tree/master/ti/coordinator/cc2538_cc2592",target:"_blank",rel:"noopener noreferrer"},p=(0,i._)("code",null,"20211222",-1),b=(0,i.Uk)("Conbee II: "),g={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("code",null,"0x26720700",-1),f=(0,i._)("p",null,[(0,i._)("em",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.")],-1),v=(0,i._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,i.Uk)(" OTA updates")],-1),y=(0,i.Uk)("This device supports OTA updates, for more information see "),_=(0,i.Uk)("OTA updates"),w=(0,i.Uk)("."),q=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),k=(0,i.Uk)("How to use device type specific configuration"),L=(0,i.uE)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover" aria-hidden="true">#</a> Cover</h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. To read the current state of this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="charging-status-binary" tabindex="-1"><a class="header-anchor" href="#charging-status-binary" aria-hidden="true">#</a> Charging_status (binary)</h3><p>The current charging status.. Value can be found in the published state on the <code>charging_status</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;charging_status&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> charging_status is ON, if <code>false</code> OFF.</p><h3 id="motor-state-enum" tabindex="-1"><a class="header-anchor" href="#motor-state-enum" aria-hidden="true">#</a> Motor_state (enum)</h3><p>The current state of the motor.. Value can be found in the published state on the <code>motor_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>declining</code>, <code>rising</code>, <code>pause</code>, <code>blocked</code>.</p><h3 id="running-binary" tabindex="-1"><a class="header-anchor" href="#running-binary" aria-hidden="true">#</a> Running (binary)</h3><p>Whether the motor is moving or not. Value can be found in the published state on the <code>running</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> running is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',16),T={},x=(0,o(83744).Z)(T,[["render",function(e,t){const o=(0,i.up)("OutboundLink"),T=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i._)("ul",null,[(0,i._)("li",null,[r,(0,i._)("a",n,[d,(0,i.Wm)(o)])]),(0,i._)("li",null,[s,(0,i._)("a",l,[c,(0,i.Wm)(o)])]),(0,i._)("li",null,[u,(0,i._)("a",h,[p,(0,i.Wm)(o)])]),(0,i._)("li",null,[b,(0,i._)("a",g,[m,(0,i.Wm)(o)])])]),f,v,(0,i._)("p",null,[y,(0,i.Wm)(T,{to:"/guide/usage/ota_updates.html"},{default:(0,i.w5)((()=>[_])),_:1}),w]),q,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(T,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[k])),_:1})])]),L],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,i]of t)e[o]=i;return e}}}]);