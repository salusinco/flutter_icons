// {"tag": string, "attr": {"viewBox": "0 0 512 512"}, "child": [{"tag": "path", "attr": {"d": ""}, "child": []}]}

class HTMLElementObject {
  String tag;
  Map<String, String> attr;
  List<HTMLElementObject> child;

  HTMLElementObject(this.tag, this.attr, this.child);

  static HTMLElementObject parseJSON(Map<String, dynamic>? json) {
    return HTMLElementObject(
      json?['tag'] ?? '',
      json?['attr'] ?? {},
      (json?['child'] ?? [])
          .map<HTMLElementObject>((e) => HTMLElementObject.parseJSON(e))
          .toList(),
    );
  }
}
