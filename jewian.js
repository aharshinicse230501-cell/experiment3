mport 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: <Widget>[
                  Container(color: Colors.red, width: 60, height: 70),
                  Container(color: Colors.green, width: 70, height: 80),
                  Container(color: Colors.blue, width: 80, height: 90),
                ],
              ),
              SizedBox(height: 40),
              Stack(
                alignment: Alignment.center,
                children: <Widget>[
                  Container(color: Colors.red, width: 300, height: 400),
                  Container(color: Colors.green, width: 160, height: 180),
                  Container(color: Colors.blue, width: 800, height: 800, child: Text('cse')),
                ],
              ),
            ],
          ),
        ),
      );
  }
}

