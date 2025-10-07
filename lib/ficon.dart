import 'package:flutter/material.dart';
import 'package:ultimate_flutter_icons/gen_icon.dart';

class FIcon extends StatelessWidget {
  final FIconObject icon;
  final double? size;
  final Color? color;

  const FIcon(
    this.icon, {
    this.size,
    this.color,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    ThemeData theme = Theme.of(context);

    return genIcon(
      icon,
      size: size ?? theme.textTheme.bodyMedium?.fontSize ?? 16,
      color: color ?? theme.textTheme.bodyMedium?.color ?? Colors.black,
    );
  }
}

class FIconObject {
  final String tag;
  final Map<String, String> attr;
  final List<FIconObject> child;

  const FIconObject(this.tag, this.attr, this.child);
}
