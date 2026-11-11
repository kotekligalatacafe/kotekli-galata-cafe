#!/usr/bin/env python3
"""Kaynak dosyalardan yayın için tek bir index.html oluşturur."""

import argparse
import base64
import hashlib
from pathlib import Path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--cikti", type=Path, help="Oluşturulacak HTML dosyasının yolu")
    args = parser.parse_args()

    kaynak = Path(__file__).resolve().parent / "kaynak"
    cikti = args.cikti or kaynak.parent.parent / "index.html"
    sablon = (kaynak / "index.template.html").read_text(encoding="utf-8")
    css = (kaynak / "site.css").read_text(encoding="utf-8")
    js = "".join(
        (kaynak / ad).read_text(encoding="utf-8")
        for ad in ("baslangic.js", "menu-verisi.js", "etkilesimler.js", "animasyon.js")
    )
    imza = base64.b64encode(hashlib.sha256(js.encode("utf-8")).digest()).decode("ascii")
    for isaret, icerik in {
        "{{SITE_CSS}}": css,
        "{{SITE_JS}}": js,
        "{{SCRIPT_HASH}}": imza,
    }.items():
        if sablon.count(isaret) != 1:
            parser.error(f"Şablonda tam bir kez bulunması gereken işaret: {isaret}")
        sablon = sablon.replace(isaret, icerik, 1)

    cikti.write_bytes(sablon.encode("utf-8"))
    print(f"Yayın dosyası hazır: {cikti}")


if __name__ == "__main__":
    main()
