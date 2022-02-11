package com.example.testh2.utils;

/**
 * @author zakaria
 */
public enum FileTypeEnum {

    CSV("csv"),
    XLSX("xlsx"),
    XLS("xls");

    private final String label;

    private FileTypeEnum(String label) {
        this.label = label;
    }

    @Override
    public String toString() {
        return label;
    }

    public boolean isEqual(String value) {
        return this.label.equals(value);
    }
}
