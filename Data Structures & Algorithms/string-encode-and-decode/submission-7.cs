public class Solution {

    public string Encode(IList<string> strs) {
        if(strs.Count == 0) return null;
        string encoded = string.Join("#1234#", strs);
        return encoded;
    }

    public List<string> Decode(string s) {
        if(s == null) return new List<string>();
        List<string> decoded = s.Split("#1234#").ToList();
        return decoded;
   }
}