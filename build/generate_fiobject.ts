export default function generateFIObject(json?: {[key: string]: any}) {
    if (!json) return '';
    return `FIconObject('${(json['tag'] ?? '')}', ${('attr' in json ? JSON.stringify(json['attr']) : '{}')}, [${json['child'].map((e: {[key: string]: any}) => generateFIObject(e)).join(',')}])`;
}