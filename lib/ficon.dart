import 'package:flutter/material.dart';
import 'package:ultimate_flutter_icons/gen_icon.dart';

class FIcon extends StatelessWidget {
  final FIconObject icon;
  final double size;
  final Color color;

  const FIcon(
    this.icon, {
    this.size = 16,
    this.color = Colors.black,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return genIcon(
      icon,
      size: size,
      color: color,
    );
  }
}

class FIconObject {
  final String tag;
  final Map<String, String> attr;
  final List<FIconObject> child;

  const FIconObject(this.tag, this.attr, this.child);
}
