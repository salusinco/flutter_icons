import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:ultimate_flutter_icons/html_element_object.dart';

SvgPicture genIcon(
  Map<String, dynamic> el, {
  double? size,
  Color? color,
}) {
  String rawSvg = genEl(HTMLElementObject.parseJSON(el));
  // '''
  //   <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
  //     <path d="${el['child'][0]["attr"]["d"]}"></path>
  //   </svg>
  // ''';

  return SvgPicture.string(
    rawSvg,
    height: size,
    width: size,
    colorFilter:
        color != null ? ColorFilter.mode(color, BlendMode.srcIn) : null,
  );
}

String genEl(HTMLElementObject el) {
  String attr = el.attr.entries.map((e) => "${e.key}=\"${e.value}\"").join(" ");
  String child = el.child.map((child) => genEl(child)).join(" ");
  return "<${el.tag} $attr>$child</${el.tag}>";
}
