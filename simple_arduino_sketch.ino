#include <dht11.h>

#define DHT11PIN 2 /*you can change it*/
dht11 DHT11;

int tempCheck=0;

void setup(){
  Serial.begin(115200);
}

void loop(){
  tempCheck = DHT11.read(DHT11PIN);
  switch (tempCheck){
    case DHTLIB_OK:
                Serial.println("OK");
                break;
    case DHTLIB_ERROR_CHECKSUM:
                Serial.println("Checksum error");
                break;
    case DHTLIB_ERROR_TIMEOUT:
                Serial.println("Time out error");
                break;
    default:
                Serial.println("Unknown error");
                break;
  }
   Serial.print((float)DHT11.temperature, 2);
  
   //Serial.println((float)DHT11.humidity, 2);

  //Serial.println(Fahrenheit(DHT11.temperature), 2);

  //Serial.println(Kelvin(DHT11.temperature), 2);

  delay(4000);
}

double Fahrenheit(double celsius){
        return 1.8 * celsius + 32;
}


double Kelvin(double celsius){
        return celsius + 273.15;
}
