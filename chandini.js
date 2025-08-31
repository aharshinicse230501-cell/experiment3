
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget
{
  const MyApp();

 
  Widget build(BuildContext context) {
    return HomePage();
  }
}

class HomePage extends StatelessWidget {
  const rootPage();

 
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Basic Widget and Layouts',
        home: Scaffold(
          appBar: AppBar(
            backgroundColor: Colors.lightBlueAccent,
            title: Text('Basic Widget and Layouts'),
          ),
          body: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              Row(
                children: [
                  Icon(Icons.check),
                  SizedBox(width: 80), // To have some gap
                  Text('Some string 1')
                ],
              ),
              SizedBox(height: 90), // some gap
              Row(
                children: [
                  SizedBox(
                      width: 700,
                      height: 200,
                      child: Image.asset('assets/images/Img_Mobiles.jpg')),
                  SizedBox(width: 80), // To have some gap
                  Text('Some string 2')
                ],
              ),
              SizedBox(height: 60),
              Row(
                children: [
                  Stack(
                    alignment: Alignment.center,
                    children: [
                      SizedBox(
                        height: 1000,
                        width: 80,
                        child: CircularProgressIndicator(
                          value: 0.9,
                          strokeWidth: 9,
                          valueColor: AlwaysStoppedAnimation<Color>(Colors.green),
                        ),
                      ),
                      Icon(Icons.directions_walk, color: Colors.red, size: 48),
                    ],
                  ),
                  SizedBox(width: 90), // To have some gap
                  Text('Some string 3')
                ],
              ),
              SizedBox(height: 70), // some gap
              Container(
                width: 400,
                height: 189,
                padding: EdgeInsets.all(96),
                margin: EdgeInsets.all(80),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: Colors.blue,
                  borderRadius: BorderRadius.circular(19),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black26,
                      blurRadius: 7,
                      offset: Offset(9, 9),
                    ),
                  ],
                ),
                child: Text(
                  'Some string 4',
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 19,
                  ),
                ),
              ),
            ],
          ),
        )

