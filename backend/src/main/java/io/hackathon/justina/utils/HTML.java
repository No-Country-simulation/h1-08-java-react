package io.hackathon.justina.utils;

import io.hackathon.justina.utils.Enums.HTMLSize;

public class HTML {

    private StringBuilder html;

    public HTML() {
        this.html = new StringBuilder();
    }

    public HTML h(String text, HTMLSize size) {
        String sizeValue = size.getValue();
        this.html.append("<h").append(sizeValue).append(">").append(text).append("</h").append(sizeValue).append(">");
        return this;
    }

    public HTML div(String text) {
        this.html.append("<div>").append(text).append("</div>");
        return this;
    }

    public HTML span(String text) {
        this.html.append("<span>").append(text).append("</span>");
        return this;
    }

    public HTML strong(String text) {
        this.html.append("<strong>").append(text).append("</strong>");
        return this;
    }

    public HTML p(String text) {
        this.html.append("<p>").append(text).append("</p>");
        return this;
    }

    public HTML a(String url, String text) {
        this.html.append("<a href=\"").append(url).append("\">").append(text).append("</a>");
        return this;
    }
    
    public HTML br() {
        this.html.append("<br>");
        return this;
    }

    public String build() {
        return this.html.toString();
    }

}
