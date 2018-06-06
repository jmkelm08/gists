package com.jmkelm08.gists.json.serialization.custom;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonSubTypes.Type;
import com.fasterxml.jackson.annotation.JsonTypeInfo;

@JsonTypeInfo(
	use=JsonTypeInfo.Id.NAME,
	include=JsonTypeInfo.As.EXISTING_PROPERTY,
	property="name",
	visible=true
)
@JsonSubTypes({
	@Type(name="RECTANGLE", value=Rectangle.class),
	@Type(name="TRIANGLE", value=Triangle.class)
})
public class ShapeSubtypeMixin {

}
