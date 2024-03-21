import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

SvgPicture genIcon(
  Map<String, dynamic> el, {
  double? size,
  Color? color,
}) {
  String rawSvg = '''
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="${el['child'][0]["attr"]["d"]}"></path>
      </svg>
    ''';

  return SvgPicture.string(
    rawSvg,
    height: size,
    width: size,
    colorFilter:
        color != null ? ColorFilter.mode(color, BlendMode.srcIn) : null,
  );
}
