import { File } from '@asyncapi/generator-react-sdk';

export default function ({ asyncapi }) {
  return (
    <File name="client.py">
      {`import paho.mqtt.client as mqtt

mqttBroker = "test.mosquitto.org"

class TemperatureServiceClient:
    def __init__(self):
        self.client = mqtt.Client()
        self.client.connect(mqttBroker)


    def sendTemperatureChange(self, id):
        topic = "temperature/changed"
        self.client.publish(topic, id)`}
    </File>
  )
}
