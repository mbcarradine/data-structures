// -----------------------------------------
// Temperature
// -----------------------------------------

// In this example, we're going to register a Particle.variable() with the cloud so that we can read the level of a temperature sensor.

int temperature = A0; // This is the input pin where you read the value of the sensor.
int tilt = D0;

char publishString[32];
int tiltvalue;
double TempCvalue; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.

void setup() {

    // This lets the device know which pin will be used to read incoming voltage.
   pinMode(temperature, INPUT);  // Our sensor pin is input (reading the sensor)
    pinMode(tilt,INPUT);

    // We are going to declare a Particle.variable() here so that we can access the value of the sensor from the cloud.
     Particle.variable("tiltvalue", &tiltvalue, INT);
    Particle.variable("TempCvalue", &TempCvalue, DOUBLE);
  //  Particle.variable("publishString", &publishString, STRING);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is a double variable.

}

void loop() {

    // check to see what the value of the sensor is and store it in the int variable analogvalue
        TempCvalue = (((analogRead(temperature) * 3.3)/4095) - 0.5) * 100; 
             delay(100);

    if (digitalRead(tilt) == HIGH) {

        // =1 if tilted
        tiltvalue = 1;

        delay(100);
        
    }
    
    else {

        // =0 if not tilted
        tiltvalue = 0;

        delay(100);

 sprintf(publishString,"{\"Tilt\": %i, \"Temperature\": %f}",tiltvalue,TempCvalue);
        Spark.publish("Uptime",publishString);
     
    }


}
