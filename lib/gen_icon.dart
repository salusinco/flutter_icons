import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:ultimate_flutter_icons/ficon.dart';

SvgPicture genIcon(
  FIconObject el, {
  double? size,
  Color? color,
}) {
  String rawSvg = genEl(el);

  return SvgPicture.string(
    rawSvg,
    height: size,
    width: size,
    colorFilter:
        color != null ? ColorFilter.mode(color, BlendMode.srcIn) : null,
  );
}

String genEl(FIconObject el) {
  String attr = el.attr.entries.map((e) => "${e.key}=\"${e.value}\"").join(" ");
  String child = el.child.map((child) => genEl(child)).join(" ");
  return "<${el.tag} $attr>$child</${el.tag}>";
}
