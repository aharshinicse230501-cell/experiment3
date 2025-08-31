
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp();

  
 
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Widget States',
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.tealAccent,
          title: Text('Stateless and Stateful Widgets'),
        ),
        body: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            MyCard(),
            SizedBox(height: 10), 
            MyStatefulCard()
          ],
        ),
      )
    );
  }
}


class MyCard extends StatelessWidget
{
  const MyCard({super.key});

  
  Widget build(BuildContext context) {
    return Card(
      color: Colors.lightBlue,
      margin: EdgeInsets.all(120),
      child: Row(
        children: [
          Icon(Icons.check),
          SizedBox(width: 70,), 
          Text('Some string')
        ],
      )
    );
  }
}

class MyStatefulCard extends StatefulWidget {
  const MyStatefulCard({super.key});

  
  State<MyStatefulCard> createState() => _MyStatefulCardState();
}

class _MyStatefulCardState extends State<MyStatefulCard> {
  bool _flag = true;

  void _flipFlag() {
    setState(() {
      _flag = !_flag;
    });
  }

 
  Widget build(BuildContext context) {
    return Card(
        color: _flag ? Colors.lightGreen : Colors.cyanAccent,
        margin: EdgeInsets.all(20),
        child: Row(
          children: [
            Icon(_flag ? Icons.check : Icons.safety_check),
            SizedBox(width: 50,), 
            Text(_flag ? 'Some stateful string' : 'Some other stateful string'),
            Spacer(), 
            IconButton(onPressed: _flipFlag, icon: Icon(Icons.add))
          ],
        )
    );
  }
}


