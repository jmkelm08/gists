package com.jmkelm08.gists.json.serialization.custom;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonDeserialize(using=ShapeDeserializer.class)
public class ShapeDeserializerMixin {

}
