const PRIORITY_MAPPING = {
  Média: "medium",
  Baixa: "low",
  Urgente: "urgent",
  Alta: "urgent",
} as const;

export function mapPriorityToTagVariant(
  priority: string,
): "medium" | "low" | "urgent" | "default" {
  return (
    PRIORITY_MAPPING[priority as keyof typeof PRIORITY_MAPPING] || "default"
  );
}
