package Sample;

import java.io.IOException;
import java.util.Map;

import org.apache.http.HttpHost;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.core.TimeValue;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.builder.SearchSourceBuilder;

import co.elastic.clients.elasticsearch._types.TimeUnit;

public class Login_ES {

	static RestHighLevelClient client;
	public static void connection(){
		client = new RestHighLevelClient(
			      RestClient.builder(
			                new HttpHost("localhost", 9200, "http")));
	}	
	
	public static boolean login() throws IOException 
	{	
		
		
		Login_pojo pojo= new Login_pojo();
		SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
	    searchSourceBuilder.timeout(new TimeValue(60));
	    searchSourceBuilder.query(QueryBuilders.matchAllQuery());
	    
	    SearchRequest searchRequest = new SearchRequest();
	    searchRequest.indices("userdata");
	    searchRequest.source(searchSourceBuilder);
	    SearchResponse searchResponse = client.search(searchRequest, RequestOptions.DEFAULT);
	    
	    SearchHits hits = searchResponse.getHits();
	    SearchHit[] searchHits = hits.getHits();
	    
	    boolean validate=false;
	
	    for (SearchHit hit : searchHits) 
	    {
	        Map<String, Object> sourceAsMap = hit.getSourceAsMap();
	        String user =(String)sourceAsMap.get("username");
	        String pass=(String)sourceAsMap.get("password");
	        validate=(user==pojo.getUsername()) && (pass==pojo.getPassword());     
	        
	        if(validate)
	        {  validate=true;
	           break;
	         }else{ 
	        	 validate=false;
	        }  
	        
	    }  
	    return validate;    
	}
	
}

