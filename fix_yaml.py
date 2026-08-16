#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
修复 Hexo 文章 front-matter 中 title 键的中文冒号问题
用法：将本脚本放到博客根目录，运行 python fix_yaml.py
"""
import os
import re
from pathlib import Path

POSTS_DIR = Path("_posts")
fixed_count = 0

if not POSTS_DIR.exists():
    print(f"错误：未找到 {POSTS_DIR} 目录，请将脚本放在博客根目录运行")
    exit(1)

for md_file in POSTS_DIR.glob("*.md"):
    content = md_file.read_text(encoding="utf-8")

    # 只修复 front-matter 区域第一行的 title： -> title:
    # 匹配文件开头 --- 或直接的 title：
    lines = content.splitlines(keepends=True)
    modified = False

    for i, line in enumerate(lines):
        # 匹配行首的 title + 中文冒号（允许前面有空格）
        if re.match(r'^\s*title\s*：', line):
            lines[i] = re.sub(r'^(\s*title\s*)：', r'\1:', line)
            modified = True
            print(f"[修复] {md_file.name}: {line.rstrip()} -> {lines[i].rstrip()}")

    if modified:
        md_file.write_text("".join(lines), encoding="utf-8")
        fixed_count += 1

print(f"\n共修复 {fixed_count} 个文件")
