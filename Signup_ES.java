package Signup;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.apache.http.HttpHost;
import org.elasticsearch.action.index.IndexRequest;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;

public class Signup_ES {
	static RestHighLevelClient client;
	public static void connection(){
		client = new RestHighLevelClient(
			      RestClient.builder(
			                new HttpHost("localhost", 9200, "http")));
	}	
	public static void  createnewuser(Signup_pojo pojo) throws IOException{
		Map<String, Object> jsonMap = new HashMap<>();
		jsonMap.put("username", pojo.getUsername());
		jsonMap.put("email", pojo.getEmail());
		jsonMap.put("password", pojo.getPassword());
		IndexRequest indexRequest = new IndexRequest("posts").index("signup_data").id(pojo.getUsername().toString()).source(jsonMap);
		client.index(indexRequest, RequestOptions.DEFAULT);
	}
	
}
