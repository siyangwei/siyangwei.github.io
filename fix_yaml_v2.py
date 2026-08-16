#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复 Hexo 文章 front-matter：title 键后必须是英文冒号 + 空格
"""
import re
from pathlib import Path

POSTS_DIR = Path("source/_posts")
fixed_count = 0

if not POSTS_DIR.exists():
    print(f"错误：未找到 {POSTS_DIR}")
    exit(1)

for md_file in POSTS_DIR.glob("*.md"):
    content = md_file.read_text(encoding="utf-8")
    lines = content.splitlines(keepends=True)
    modified = False

    for i, line in enumerate(lines):
        # 匹配 title + 任意空白 + 中文冒号 + 任意空白
        m = re.match(r'^(\s*title)\s*：\s*(.*)$', line)
        if m:
            old = line.rstrip()
            lines[i] = f"{m.group(1)}: {m.group(2)}\n"
            print(f"[修复] {md_file.name}")
            print(f"  原: {old}")
            print(f"  新: {lines[i].rstrip()}")
            modified = True

    if modified:
        md_file.write_text("".join(lines), encoding="utf-8")
        fixed_count += 1

print(f"\n共修复 {fixed_count} 个文件")
