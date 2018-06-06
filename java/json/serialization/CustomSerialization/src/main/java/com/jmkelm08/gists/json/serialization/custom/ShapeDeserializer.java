package com.jmkelm08.gists.json.serialization.custom;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

public class ShapeDeserializer extends StdDeserializer<Shape> {

	protected ShapeDeserializer() {
		super(Shape.class);
	}

	@Override
	public Shape deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
		JsonNode node = p.getCodec().readTree(p);
		String name = node.get("name").asText();
		
		if (name == "RECTANGLE") {
			return new ObjectMapper().treeToValue(node, Rectangle.class);
		}
		
		return new ObjectMapper().treeToValue(node, Triangle.class);
	}

}
