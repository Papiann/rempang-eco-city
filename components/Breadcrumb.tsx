"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="bg-bg-light border-b border-border-color">
      <div className="container-content py-4">
        <div className="flex items-center gap-2 text-sm">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-primary-blue hover:text-primary-dark transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-text-secondary">{item.label}</span>
              )}
              {index < items.length - 1 && (
                <ChevronRight size={16} className="text-text-secondary" />
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
